module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['@typescript-eslint', 'eslint-plugin-import'],
    extends: [
        'mantine',
        'plugin:@next/next/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-explicit-any': 'error',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error', {endOfLine: 'auto'}],
        'no-shadow': 0,
        'sort-imports': [
            'warn',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
                allowSeparatedGroups: true,
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'sibling', 'index', 'parent', 'unknown', 'type', 'object'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'react**',
                        group: 'external',
                    },
                    {
                        pattern: '@react**',
                        group: 'external',
                    },
                    {
                        pattern: '_app/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'desc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    globals: {
        __DEV__: true,
    },
};
