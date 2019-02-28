const path = require('path');
const fs = require('fs');

module.exports = function () {
  const subProjects = fs.readdirSync(__dirname)
    .filter(item => fs.lstatSync(item).isDirectory())
    .filter(item => fs.existsSync(path.join(__dirname, item, 'package.json')));

  process.env.NODE_PATH = path.join(__dirname, 'node_modules');
  process.env.NODE_PATH += subProjects.map(subProject => path.delimiter + path.join(__dirname, subProject, 'node_modules'))

  console.log(process.env.NODE_PATH);

  return {
    files: [
      '**/*.js', 
      '!**/*.test.js',
      '!**/node_modules/**'
    ],

    tests: [
      '**/*.test.js',
      '!**/node_modules/**'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};