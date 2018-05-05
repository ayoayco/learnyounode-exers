var fs = require('fs'),
    filename = process.argv[2];

fs.readFile(filename , (err, buffer)=>{
    var text = buffer.toString('ascii'),
        lines = text.split('\n');

    console.log(lines.length - 1);
});     

