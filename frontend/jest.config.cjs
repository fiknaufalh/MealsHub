/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  preset : 'ts-jest',
  testEnvironment : 'node',
  globals : {
    'ts-jest' : {
      tsconfig : 'tsconfig.jest.json',
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    // Add this line to handle ES modules
    '^.+\\.m?js$': 'babel-jest',
  },
  setupFilesAfterEnv : ['./jest.setup.cjs'],
};