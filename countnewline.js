var fs = require('fs');
var filename = process.argv[2]; // first argument
var filebuff = fs.readFileSync(filename);
var filetxt = filebuff.toString('ascii');

var lines = filetxt.split('\n');

console.log(lines.length - 1)
