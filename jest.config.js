module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@data-structures/(.*)$': '<rootDir>/src/data-structures/$1',
    '^@algorithms/(.*)$': '<rootDir>/src/algorithms/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1'
  }
};
