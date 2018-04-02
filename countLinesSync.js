var fs = require('fs'),
    n = process.argv[2],
    b = fs.readFileSync(n),
    t = b.toString('ascii'),
    l = t.split('\n');

console.log(l.length - 1);

