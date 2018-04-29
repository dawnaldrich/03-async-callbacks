'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readFiles = (paths, callback) => {
  fs.readFile(paths[0], 'utf8', (err1, data1) => {
    if (err1) {
      return callback(err1);
    }
    callback(data1);
    return fs.readFile(paths[1], 'utf8', (err2, data2) => {
      if (err2) {
        return callback(err2);
      }
      callback(data2);
      return fs.readFile(paths[2], 'utf8', (err3, data3) => {
        if (err3) {
          return callback(err3);
        }
        callback(data3);
        return undefined;
      });
    });
  });
}

// fileReader.mapFilesAsync = (paths, callback) => {
//   const pathArray = paths;
//   for (let i = 0; i < pathArray.length; i++) {
//     fs.readFile(pathArray[i], (error, fileBuffer) => {
//       if (error) {
//         throw error;
//       }
//       return callback(null, fileBuffer.toString('utf8'));
//     });
//   }
// };

