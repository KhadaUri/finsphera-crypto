const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Location
  dir: './',
})

const customJestConfig = {
  // Env test
  testEnvironment: 'jest-environment-jsdom',
  // Map Modules
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)