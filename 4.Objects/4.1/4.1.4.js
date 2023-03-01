let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const calcSum = (salaries) =>{
    let sum = 0;
    for(let key in salaries){
        sum += salaries[key];
    }
}

console.log(calcSum(salaries))