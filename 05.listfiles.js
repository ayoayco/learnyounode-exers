var dir = process.argv[2],
    ext = `.${process.argv[3]}`,
    fs = require('fs'),
    path = require('path');

fs.readdir(dir, (err, files) => {
    files.forEach((file) => {
        if(path.extname(file) === ext){
            console.log(file);
        }
    });
});

