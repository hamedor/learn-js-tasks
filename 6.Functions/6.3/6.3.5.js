const inBetween = (a, b) => {
    return (c) =>{
        return c >= a && c <= b;
    }
}
const inArray = (array) => {
    return (c) => {
        return array.includes(c)
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)) );
console.log(arr.filter(inArray([1, 2, 10])) ); 
