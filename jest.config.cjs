// Read more:
// https://jestjs.io/docs/configuration
//
// Don't forget to update the Jest section in the README.
//
/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/test"],
    testRegex: ["^.+\\.test\\.(ts|tsx)$"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        // The alias below lets Jest rely on a dummy profile.
        "^\\+profile/content/predefined$": "<rootDir>/main/profile/content/perseverance-dummy",
        //
        "^\\+elements$": "<rootDir>/main/elements/index",
        "^\\+i18n$": "<rootDir>/main/i18n/index",
        "^\\+profile$": "<rootDir>/main/profile/index",
        "^\\+theme$": "<rootDir>/main/theme/index",
        "^\\+types$": "<rootDir>/main/types/index",
        "^\\+test/fakes$": "<rootDir>/test/fakes/index",
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
