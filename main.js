'use strict';

// const logger = require('.lib/logger');
//
const aaaPath = `${__dirname}/data/aaaFile.txt`;
const bbbPath = `${__dirname}/data/bbbFile.txt`;
const cccPath = `${__dirname}/data/cccFile.txt`;
const paths = [aaaPath, bbbPath, cccPath];
const fileReader = require('./src/lib/reader');

try {
  fileReader.readFiles(paths, data);
} catch (error) {
  console.log(`hello ${error}`);
}
