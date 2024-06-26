// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   roots: ["<rootDir>/src"],
//   moduleDirectories: ["node_modules", "src"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
//   },
//   testMatch: [
//     "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
//     "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
//   ],
//   collectCoverage: true,
//   collectCoverageFrom: [
//     "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
//     "!<rootDir>/src/index.tsx",
//     "!<rootDir>/src/serviceWorker.ts",
//   ],
//   coverageReporters: ["json", "lcov", "text-summary", "html"],
//   globals: {
//     "ts-jest": {
//       tsconfig: "<rootDir>/tsconfig.json",
//     },
//   },
//   coverageThreshold: {
//     global: {
//       branches: 80,
//       functions: 80,
//       lines: 80,
//       statements: 80,
//     },
//   },
// };

//! chat

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/index.tsx",
    "!<rootDir>/src/serviceWorker.ts",
  ],
  coverageReporters: ["json", "lcov", "text-summary", "html"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
