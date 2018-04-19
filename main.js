'use strict';

// const logger = require('.lib/logger');
//
const aaaPath = `${__dirname}/data/aaaFile.txt`;
const bbbPath = `${__dirname}/data/bbbFile.txt`;
const cccPath = `${__dirname}/data/cccFile.txt`;
const paths = [aaaPath, bbbPath, cccPath];
const fileReader = require('./lib/reader');

try {
  fileReader.mapFilesAsync(paths);
} catch (error) {
  console.log(`hello` + error);
}
