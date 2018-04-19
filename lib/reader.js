'use strict';

const fs = require('fs');
/* const readline = require('readline'); */

const fileReader = module.exports = {};

// fileReader.mapFilesAsync = (paths, callback) => undefined;

fileReader.mapFilesAsync = (paths, callback) => {
  const pathArray = paths;
  for (let i = 0; i < pathArray.length; i++) {
    fs.readFile(pathArray[i], (error, fileBuffer) => {
      if (error) {
        throw error;
      }
      return callback(fileBuffer.toString('utf8'));
    });
  }
};

