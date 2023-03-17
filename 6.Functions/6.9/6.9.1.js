function work(a, b) {
    console.log( a + b ); 
  }


function spyDecorator(f){
    function wrapper(...args) {
        wrapper.calls.push(args);
        return f.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

  
work = spyDecorator(work);
  
work(1, 2); 
work(4, 5); 
  
for (let args of work.calls) {
    console.log( 'call:' + args.join() ); 
}