function solution(numbers) {
    var answer = 0;
    var numarr=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    numarr.map(x=>{if(numbers.includes(x)){return numbers=numbers.replaceAll(x,numarr.indexOf(x))}});
    return Math.floor(numbers);
}