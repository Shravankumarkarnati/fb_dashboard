module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
