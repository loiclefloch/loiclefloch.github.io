// Custom image renderer for accessibility
//
// Standard Markdown: ![text](href "title")
// - text: goes into brackets, used as caption (figcaption)
// - title: goes into quotes, used as alt text for accessibility
//
// This renderer changes the default behavior:
// - alt = title (long description for screen readers), falls back to text
// - title = title (preserved for tooltip on hover)
// - figcaption = text (caption from brackets)
//
// Example:
//   ![Development Workflow](/images/workflow.png "Detailed description of the workflow")
// Renders as:
//   <figure class="image-caption">
//     <img src="/images/workflow.png" alt="Detailed description of the workflow" title="Detailed description of the workflow">
//     <figcaption>Development Workflow</figcaption>
//   </figure>

const { encodeURL, url_for, escapeHTML: escape } = require("hexo-util");
const { join } = require("path").posix;

hexo.extend.filter.register("marked:renderer", function (renderer) {
  const hexoInstance = this;
  const { image_caption: captionConfig = {} } = hexoInstance.config;
  const className = captionConfig.class_name || "image-caption";
  const captionEnabled = captionConfig.enable !== false;

  renderer.image = function (href, title, text) {
    const { hexo, options } = this;
    const { relative_link } = hexo.config;
    const { lazyload, prependRoot, postPath } = options;

    if (
      href &&
      !/^(#|\/\/|http(s)?:)/.test(href) &&
      !relative_link &&
      prependRoot
    ) {
      if (!href.startsWith("/") && !href.startsWith("\\") && postPath) {
        const PostAsset = hexo.model("PostAsset");
        const asset = PostAsset.findById(
          join(postPath, href.replace(/\\/g, "/")),
        );
        if (asset) href = asset.path.replace(/\\/g, "/");
      }
      href = url_for.call(hexo, href);
    }

    const altText = title || text || "";
    const caption = text || "";

    let imgTag = `<img src="${encodeURL(href)}"`;

    if (altText) {
      imgTag += ` alt="${escape(altText)}"`;
    }

    if (title) {
      imgTag += ` title="${escape(title)}"`;
    }

    if (lazyload) {
      imgTag += ' loading="lazy"';
    }

    imgTag += ">";

    if (captionEnabled && caption) {
      return `<figure class="${className}">${imgTag}<figcaption>${caption}</figcaption></figure>`;
    }

    return imgTag;
  };
});
