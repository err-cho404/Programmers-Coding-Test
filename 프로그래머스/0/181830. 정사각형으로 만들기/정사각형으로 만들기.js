function solution(arr) {
    arr.map(x=>{if(arr.length>x.length){x.push(...Array(arr.length-x.length).fill(0))}else if(arr.length<x.length){arr.push(...Array.from(Array(x.length-arr.length), () => new Array(x.length).fill(0)))}});
    return arr;
}