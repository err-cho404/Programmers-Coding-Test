const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    if(1<=input && input<=10){
        var x='*';
        for(i=1;i<=input;i++){
            console.log(x.repeat(i));
//            x=x+'*'
        }
    }
});
