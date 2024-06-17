/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    moduleNameMapper: {
      // if your using tsconfig.paths thers is no harm in telling jest
      '@components/(.*)$': '<rootDir>/src/components/$1',
      '@/(.*)$': '<rootDir>/src/$1',

      // mocking assests and styling
    },

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
};