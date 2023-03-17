const printNumbers = (from, to) => {
    for(let i = from; i <= to; i++){
        setTimeout(()=> console.log(i), 1000+(i-from)*1000);
    }
}


const printNumbersInterval = (from, to) => {
    const timerId = setInterval(() => {
        from <= to ? console.log(from++) : clearInterval(timerId);
    }, 1000);
}

printNumbersInterval(5,10)