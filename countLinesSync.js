var fs = require('fs'),
    filename = process.argv[2],
    buffer = fs.readFileSync(filename),
    text = buffer.toString('ascii'),
    lines = text.split('\n');

console.log(lines.length - 1);

