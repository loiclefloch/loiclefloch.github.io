module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the string "[!quote]" in Markdown files',
      recommended: true,
    },
    fixable: 'code',
    hasSuggestions: false,
    schema: [
      // no options
    ],
    messages: {
      forbidden: 'The string "[!quote]" is not allowed.',
    },
  },
  create(context) {
    return {
      Program(node) {
        console.log("TEST");
        const sourceCode = context.getSourceCode();
        const text = sourceCode.getText(node);
        throw "test"

        // Find occurrences of "[!quote]"
        const quoteRegex = /\[!quote\]/g;
        let match;

        while ((match = quoteRegex.exec(text)) !== null) {
          context.report({
            node,
            messageId: 'forbidden',
            loc: {
              start: sourceCode.getLocFromIndex(match.index),
              end: sourceCode.getLocFromIndex(match.index + match[0].length),
            },
            fix(fixer) {
              return fixer.replaceTextRange(
                [match.index, match.index + match[0].length],
                '[!QUOTE]' // Replace with desired text
              );
            },
          });
        }
      },
    };
  },
};