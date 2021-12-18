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
        "^\\+profile$": "<rootDir>/main/profile/index",
        "^\\+types$": "<rootDir>/main/types/index",
        //
        "^.+\\.css$": "<rootDir>/test/jest/generic-asset-file-stub.cjs",
    },
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.tsx$": "ts-jest",
        "^.+\\.webp$": "<rootDir>/test/jest/image-asset-file-stub.cjs",
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
    ],
}
