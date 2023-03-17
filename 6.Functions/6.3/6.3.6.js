let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


const byField = (field) => {
    return (a, b) => {
        if(a[field] > b[field]){
            return 1;
        }
        return -1;
    }
}


console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));