module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js'
    },
   // testEnvironment: 'jsdom'
};
