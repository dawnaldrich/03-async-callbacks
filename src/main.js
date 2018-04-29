'use strict';

const logger = require('./lib/logger');
const fileReader = require('./lib/reader');

const aaaPath = `${__dirname}/data/aaaFile.txt`;
const bbbPath = `${__dirname}/data/bbbFile.txt`;
const cccPath = `${__dirname}/data/cccFile.txt`;
const files = [aaaPath, bbbPath, cccPath];

const printCharacters = (characters) => {
  console.log(characters);
  console.log('-----------------------------------');
};

const CHARACTERS = 256;

const readFileArraySync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return fileReader.readFirstNCharacterAsync(currentFilePath, CHARACTERS, (file) => {
      printCharacters(file);
      readFileArraySync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

readFileArraySync(files, 0, () => logger.log(logger.INFO, 'We have real all the files'));

