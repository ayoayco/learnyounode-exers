var http = require('http'),
    url = process.argv[2];

http.get(url, res => {
    res.setEncoding('utf8');

    res.on('error', err => {
        console.error(err);
    });

    res.on('data', data => {
        console.log(data);
    });

});
