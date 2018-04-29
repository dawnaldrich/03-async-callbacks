# Asynchronous Callbacks
**Author**: Dawn Aldrich
**Version**: 1.0.1
## Overview
Create a file reader module to take an array of paths and read each file into an array of string using an error-first callback.

Exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use).

readFileArraySync takes 3 parameters. An array of file paths, the current Index of the array and a callback.

The file reader module fileReader is an object that has a method readFirstNCharacterAsync that takes 3 parameters, the path of the files passed from readFileArraySync,
the characters or blob from each file and a callback.
The fs.readFile returns the callback if no error as a buffered string.
