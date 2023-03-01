function pow(x, n) {
   return x ** n;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if(n < 1){
    console.log('только натуральные числа');
}else{
    console.log(pow(x,n));
}