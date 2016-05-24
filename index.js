'use strict';
module.exports = {
    extends: 'airbnb',
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true
    },
    parserOptions: {
        sourceType: 'script'
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4],
        'max-len': ['error', { code: 100, ignoreComments: true }],
        'new-cap': ['error', { capIsNewExceptions: ['Given', 'When', 'Then'] }],
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'no-bitwise': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: false,
                ClassDeclaration: false
            }
        }],
        strict: ['error', 'safe']
    }
};
