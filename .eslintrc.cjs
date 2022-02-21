// Read more:
// https://eslint.org/docs/user-guide/configuring/
//
// Don't forget to update the ESLint section in the README.
//
module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:compat/recommended",
    ],
    rules: {
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": "error",
        "block-spacing": ["error", "always"],
        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error", "1tbs"],
        "camelcase": "error",
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": "error",
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "curly": "error",
        "default-case-last": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "error",
        "eol-last": "error",
        "eqeqeq": "error",
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "func-name-matching": "error",
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "multiline-arguments"],
        "generator-star-spacing": ["error", "before"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4, {
            SwitchCase: 1,
        }],
        "key-spacing": "error",
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": "error",
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": ["error", "always", {
            exceptAfterOverload: true,
            exceptAfterSingleLine: true,
        }],
        "max-len": ["error", {
            code: 80,
            tabWidth: 4,
            ignoreComments: true,
            // language=RegExp
            ignorePattern:
                "(^import\\s.+\\sfrom\\s.+$)"
                + "|(^\\s*(export\\s)?function\\s\\w+(<.+>)?\\((\\)(:\\s.+)?\\s\\{)?$)"
                + "|(^\\s*(export\\s)?(const|let)\\s\\w+:\\s.+\\s=(\\s([({\\[]))?$)",
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-confusing-arrow": "error",
        "no-constructor-return": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": ["error"],
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": ["error", "all", {
            enforceForArrowConditionals: false,
            ignoreJSX: "all",
        }],
        "no-floating-decimal": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": ["error", {
            exceptions: { "Property": false },
        }],
        "no-multiple-empty-lines": ["error", {
            max: 1,
        }],
        "no-nested-ternary": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-promise-executor-return": "error",
        "no-proto": "error",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",
        "no-return-assign": ["error", "always"],
        "no-script-url": "error",
        "no-sequences": ["error", {
            allowInParentheses: false,
        }],
        "no-self-compare": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",
        "no-trailing-spaces": ["error", {
            skipBlankLines: true,
        }],
        "no-undef-init": "error",
        "no-underscore-dangle": ["error", {
            allowFunctionParams: false,
        }],
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": ["error", {
            defaultAssignment: false,
        }],
        "no-unreachable-loop": "error",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", {
            enums: false,
            functions: false,
            classes: true,
            typedefs: false,
            variables: true,
        }],
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": ["error", {
            consistent: true,
            multiline: true,
        }],
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": ["error", "always"],
        "operator-linebreak": ["error", "before", {
            overrides: {
                "=": "after",
            },
        }],
        "padded-blocks": ["error", "never"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-numeric-literals": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double", {
            allowTemplateLiterals: true,
            avoidEscape: true,
        }],
        "radix": "error",
        "require-atomic-updates": "error",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "require-unicode-regexp": "error",
        "rest-spread-spacing": ["error", "never"],
        "semi": "off",
        "@typescript-eslint/semi": ["error", "never"],
        "semi-spacing": "error",
        "semi-style": ["error", "first"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["error", {
            anonymous: "always",
            asyncArrow: "always",
            named: "never",
        }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always", {
            markers: ["/"],
        }],
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"],
        "template-tag-spacing": ["error", "never"],
        "wrap-iife": ["error", "inside"],
        "wrap-regex": "error",
        "yield-star-spacing": ["error", "after"],
        "@typescript-eslint/array-type": ["error", {
            default: "generic",
        }],
        "@typescript-eslint/consistent-type-assertions": ["error", {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never",
        }],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": ["error", {
            ignoreArrowShorthand: true,
        }],
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
    },
    overrides: [
        {
            files: ["*.tsx"],
            extends: [
                "plugin:react/recommended",
                "plugin:react-hooks/recommended",
                "plugin:tailwindcss/recommended",
            ],
            rules: {
                "jsx-quotes": ["error", "prefer-double"],
                "react/jsx-boolean-value": ["error", "never"],
                "react/jsx-child-element-spacing": "error",
                "react/jsx-closing-bracket-location": ["error", "line-aligned"],
                "react/jsx-closing-tag-location": "error",
                "react/jsx-curly-brace-presence": ["error", "never"],
                "react/jsx-curly-newline": "error",
                "react/jsx-curly-spacing": ["error", "never"],
                "react/jsx-equals-spacing": ["error", "never"],
                "react/jsx-first-prop-new-line": ["error", "multiline"],
                "react/jsx-fragments": ["error", "element"],
                "react/jsx-indent": ["error", 4, {
                    checkAttributes: true,
                    indentLogicalExpressions: true,
                }],
                "react/jsx-indent-props": ["error", 4],
                "react/jsx-newline": ["error", {
                    prevent: true,
                }],
                "react/jsx-no-bind": ["error", {
                    ignoreRefs: true,
                    allowFunctions: true,
                    allowArrowFunctions: true,
                }],
                "react/jsx-no-script-url": "error",
                "react/jsx-no-useless-fragment": ["error", {
                    allowExpressions: true,
                }],
                "react/jsx-pascal-case": "error",
                "react/jsx-props-no-multi-spaces": "error",
                "react/jsx-props-no-spreading": ["error", {
                    explicitSpread: "ignore",
                }],
                "react/jsx-tag-spacing": ["error", {
                    closingSlash: "never",
                    beforeSelfClosing: "never",
                    afterOpening: "never",
                    beforeClosing: "never",
                }],
                "react/jsx-wrap-multilines": ["error", {
                    declaration: "parens-new-line",
                    assignment: "parens-new-line",
                    return: "parens-new-line",
                    arrow: "parens-new-line",
                }],
                "react/button-has-type": "error",
                "react/forbid-dom-props": ["error", {
                    forbid: ["style"],
                }],
                "react/function-component-definition": ["error", {
                    namedComponents: "function-declaration",
                    unnamedComponents: "arrow-function",
                }],
                "react/no-access-state-in-setstate": "error",
                "react/no-array-index-key": "error",
                "react/no-danger": "error",
                "react/no-unknown-property": ["error", {
                    ignore: [
                        "class",
                        "fill-rule",
                        "for",
                        "stroke-width",
                        "stroke-linecap",
                        "stroke-linejoin",
                    ],
                }],
                "react/no-multi-comp": "error",
                "react/no-unstable-nested-components": "error",
                "react/prefer-stateless-function": "error",
                "react/react-in-jsx-scope": "off",
                "react/self-closing-comp": ["error", {
                    component: true,
                    html: true,
                }],
                "react/void-dom-elements-no-children": "error",
                "react-hooks/exhaustive-deps": "error",
                "tailwindcss/classnames-order": "error",
                "tailwindcss/enforces-shorthand": "error",
                "tailwindcss/migration-from-tailwind-2": "error",
                "tailwindcss/no-contradicting-classname": "error",
                "tailwindcss/no-custom-classname": "error",
            },
        },
        {
            files: ["*.test.ts", "*.test.tsx"],
            extends: [
                "plugin:jest/recommended",
                "plugin:jest-dom/recommended",
                "plugin:jest-formatting/recommended",
                "plugin:testing-library/react",
            ],
            rules: {
                "jest/consistent-test-it": "error",
                "jest/expect-expect": "error",
                "jest/no-alias-methods": "error",
                "jest/no-commented-out-tests": "error",
                "jest/no-disabled-tests": "error",
                "jest/no-duplicate-hooks": "error",
                "jest/no-if": "error",
                "jest/no-test-return-statement": "error",
                "jest/prefer-expect-resolves": "error",
                "jest/prefer-hooks-on-top": "error",
                "jest/prefer-spy-on": "error",
                "jest/prefer-to-be": "error",
                "jest/prefer-to-contain": "error",
                "jest/prefer-to-have-length": "error",
                "jest/prefer-todo": "error",
                "jest/require-hook": "error",
                "jest/require-to-throw-message": "error",
                "testing-library/no-await-sync-events": "error",
                "testing-library/no-manual-cleanup": "error",
                "testing-library/no-render-in-setup": "off",
                "testing-library/prefer-explicit-assert": "error",
                "testing-library/prefer-user-event": "error",
                "testing-library/prefer-wait-for": "error",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
    },
    settings: {
        "react": {
            // Preact 10 provides an API similar to React 17.
            version: "17",
        },
        "tailwindcss": {
            config: "./tailwind.config.cjs",
        },
        "testing-library/custom-renders": "off",
    },
    plugins: [
        "@typescript-eslint",
        "jest",
        "jest-dom",
        "jest-formatting",
        "tailwindcss",
        "testing-library",
    ],
}
