module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'no-console': 1,
    'no-param-reassign': 0,
    'react/no-array-index-key': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
  env: {
    browser: true,
    node: true,
  },
  'parser': 'babel-eslint',
};
