export default {
  transform: {
    '^.+\\.js$': 'babel-jest',  // Use babel-jest to transform JavaScript files
  },
  testEnvironment: 'node', // Set the test environment to node
};
