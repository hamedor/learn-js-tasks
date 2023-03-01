let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


const double = (menu) =>{
    for (let key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
}


console.log(double(menu));