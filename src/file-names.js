const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];  
  let nameCount = {}; 
  for (let i = 0; i < names.length; i += 1) {
    if (nameCount[names[i]]) {
      let k = nameCount[names[i]];    
      let newName = `${names[i]}(${k})`;
      while (nameCount[newName]) {
        k++;
        newName = `${names[i]}(${k})`;
      }
      arr.push(newName);
      nameCount[newName] = 1; 
      nameCount[names[i]]++; 
    } else {
      arr.push(names[i]);
      nameCount[names[i]] = 1;  
    }
  }
  return arr;  
}

module.exports = {
  renameFiles
};
