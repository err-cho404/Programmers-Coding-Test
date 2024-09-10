const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    line=line.split('').map(x=>console.log(x));
}).on('close',function(){
    str = input[0];
});