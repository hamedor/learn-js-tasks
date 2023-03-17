const sumToCycle = (num) => {
    let result = 0;
    for(let i = num;i > 0;i--){
        result+=i
    }
    return result;
}

const sumToRecursive = (num) => {
    return num === 1 ?  1: num + sumToRecursive(num - 1);
}

const sumToProgressive = (num) => {
    return num * (num + 1) / 2;
}

console.log(sumToCycle(12));
console.log(sumToRecursive(12));
console.log(sumToProgressive(12));