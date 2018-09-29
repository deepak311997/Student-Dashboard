module.exports = {
  bail: true,
  verbose: true,
  rootDir: '../client',
  setupFiles: ['./src/app-config.js', './src/tests.js'],
  collectCoverageFrom: [
    '**/*.{js}',
    '**/*.{scss}',
    '!**/node_modules/**',
  ],
  coverageDirectory: './coverage-client-unit',
  coverageReporters: ['cobertura', 'html'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  globals: {
    'window': true,
  },
};
