'use strict';

const fs = require('fs');
const logger = require('./logger');

const fileReader = module.exports = {};

fileReader.readFirstNCharacterAsync = (filePath, characters, callback) => {
  console.log(characters);
  logger.log(logger.VERBOSE, `Reading ${characters}`);

  return fs.readFile(
    filePath,
    (error, fileBuffer) => {
      if (error) {
        throw new Error(' coming from line 15 reader');
      }
      return callback(fileBuffer.toString('utf8', 0, characters));
    },
  );
};

