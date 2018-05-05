var dir = process.argv[2],
    ext = process.argv[3],
    mymodule = require('./readdirmodule.js');

mymodule(dir, ext, function(err, files){
    if(!err){
        files.forEach(file => {
            console.log(file);
        });
    }
});


