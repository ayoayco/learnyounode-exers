var fs = require('fs'),
    n = process.argv[2];

fs.readFile(n , (err, b)=>{
    var t = b.toString('ascii'),
        l = t.split('\n');

    console.log(l.length - 1);
});     

