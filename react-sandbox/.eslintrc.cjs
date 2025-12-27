module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'import',
        'prettier',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off', // Vite + React 17+
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    ['parent', 'sibling'],
                    'index',
                ],
                'newlines-between': 'always',
            },
        ],
    },
};
