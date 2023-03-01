function readNumber() {
    let number;

    do {
        number = prompt('Введите число', 0);
    } while (!isFinite(num));

    if(num===null || num === ''){
        return null;
    }

    return +num;
}

console.log(readNumber());