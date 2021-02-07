const { resolve } = require('path');
const root = require(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = { ..rootConfig, ... {
    rootDir: root,
    displayName: "end2end-tests",
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.js"],
    testMatch: ["<rootDir>/test/**/*.test.ts"],
}}