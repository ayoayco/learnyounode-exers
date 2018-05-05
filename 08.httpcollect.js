var http = require('http'),
    url = process.argv[2];

http.get(url, res => {

    var datasets = [];

    res.setEncoding('utf8');

    res.on('error', err => {
        console.error(err);
    });

    res.on('data', data => {
        datasets.push(data);
    });

    res.on('end', () => {
        var chars = 0;
        datasets.forEach(data => {
            chars += data.length;
        });
        console.log(chars);
        console.log(datasets.join(''));
    });
});
