var sum = 0;
var args = process.argv;
for(var i= 2; i<args.length; i++){
    sum += parseInt(args[i]);
}
console.log(sum);

