var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    ext = `.${process.argv[3]}`;

fs.readdir(dir, (err, files) => {
    files.forEach((file) => {
        if(path.extname(file) === ext){
            console.log(file);
        }
    });
});

