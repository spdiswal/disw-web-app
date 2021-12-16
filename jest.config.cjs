// Read more:
// https://jestjs.io/docs/configuration
//
// Don't forget to update the Jest section in the README.
//
/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
    testEnvironment: "@happy-dom/jest-environment",
    roots: ["<rootDir>/test"],
    testRegex: ["^.+\\.test\\.(ts|tsx)$"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        "^.+\\.css$": "<rootDir>/test/jest/generic-asset-file-stub.cjs",
    },
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.tsx$": "ts-jest",
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
    ],
}
