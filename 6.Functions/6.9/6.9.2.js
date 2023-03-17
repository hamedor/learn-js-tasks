function f(x) {
    console.log(x);
}

function delayDecorator(f, ms) {
    return function(){
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
  
let f1000 = delayDecorator(f, 1000);
let f1500 = delayDecorator(f, 1500);
  
f1000("test"); 
f1500("test");