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
    {
      type: 'clue_unlocked',
      icon: '<i class="fa-solid fa-puzzle-piece"></i>',
      title: 'New clue unlocked', // optional
    },
    {
      type: 'question',
      icon: '<i class="fa-solid fa-question"></i>',
      title: 'Question', // optional
    },
  ]
};

hexo.extend.filter.register('marked:use', function (markedUse) {
  markedUse(markedAlert(options));
});

// TODO: https://github.com/bent10/marked-extensions/tree/main/packages/directive
