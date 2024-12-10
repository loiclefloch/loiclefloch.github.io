// https://github.com/hexojs/hexo-renderer-marked#extensibility

// https://github.com/bent10/marked-extensions/tree/main/packages/alert
const markedAlert = require('marked-alert');

const options = {

  variants: [
    {
      type: 'quote',
      icon: '<i class="fa-solid fa-quote-right"></i>',
      title: 'Quote', // optional
    },
  ]
};

hexo.extend.filter.register('marked:use', function (markedUse) {
  markedUse(markedAlert(options));
});

// TODO: https://github.com/bent10/marked-extensions/tree/main/packages/directive
