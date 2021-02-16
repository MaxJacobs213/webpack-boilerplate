module.exports = {
  ignorePatterns: [
    'dist',
    'node_modules',
  ],
  rules: {
    'max-len': [
      'error',
      {
        ignoreUrls: true,
        code: 120,
      },
    ],
    indent: [
      'error',
      2,
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': (
      process.env.NODE_ENV === 'production'
        ? [
          'error',
          {
            allow: [
              'warn',
              'error',
            ],
          },
        ]
        : 'off'
    ),
    'no-debugger': (
      process.env.NODE_ENV === 'production'
        ? 'error'
        : 'warn'
    ),
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
};
