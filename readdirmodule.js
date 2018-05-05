var fs = require('fs'),
    path = require('path');

module.exports = function(dir, ext, callback){
    var data = [];
    ext = `.${ext}`;
    fs.readdir(dir, (err, files) => {
        if(err){
            return callback(err);
        } else {
            files.forEach((file) => {
                if(path.extname(file) === ext){
                    data.push(file);
                }
            });
        }            
        callback(null, data);
    });
}

