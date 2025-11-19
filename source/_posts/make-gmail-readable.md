---
title: Make Gmail Readable
date: 2025-02-25 23:03:00
category: TIL
permalink: /make-gmail-readable/
description: "Make Gmail readable"
lang: en
tags: 
---

I joined the [Writing for Developers Book Club](https://eatonphil.com/2025-writing-for-developers.html) a few weeks ago.
This book club about the really great [Writing for Developers](https://www.manning.com/books/writing-for-developers) is happening only by email. So I have a lot of emails to read.
But Gmail is not really great for this. It is displaying the emails on the whole width of the screen with a small font size and not a really good font.
I needed to improve the experience by making it more readable.

Using a chrome extension like Stylebot or Stylus we can add our own custom CSS. We configure a new stylesheet for the url `https://mail.google.com`:

![Stylebot URL configuration](/images/make-gmail-readable/make-gmail-readable-6.png)

And then we just have to add our css code:

![Stylebot css declaration](/images/make-gmail-readable/make-gmail-readable-7.png)

```css
@import url('https://fonts.cdnfonts.com/css/open-sans');

.ii.gt {
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Open Sans", Arial, serif;
}

.ii .a3s {
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 27.6px;
}
```

![Before](/images/make-gmail-readable/make-gmail-readable-5.png)

![After](/images/make-gmail-readable/make-gmail-readable-4.png)