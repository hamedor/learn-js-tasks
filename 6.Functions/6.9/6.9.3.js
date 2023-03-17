let f = debounceDecorator(console.log, 1000);

function debounce(f, ms) {
    let shouldIgnore = false;

    return function() {
        if(shouldIgnore) {
            return
        }
        f.apply(this, arguments);

        shouldIgnore = true;

        setTimeout(() => shouldIgnore = false, ms);
    }
}




f(1);
f(2); 

setTimeout( () => f(3), 100); 
setTimeout( () => f(4), 1100); 
setTimeout( () => f(5), 1500); 