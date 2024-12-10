const {RuleTester} = require("eslint");
const noQuoteRule = require("./no-quote");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  languageOptions: { ecmaVersion: 2015 }
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "no-quote", // rule name
  noQuoteRule, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [{
      code: "> [!QUOTE]",
    }],
    // 'invalid' checks cases that should not pass
    invalid: [{
      code: "> [!quote]",
      output: "> [!QUOTE]",
      errors: 1,
    }],
  }
);

console.log("All tests passed!");
