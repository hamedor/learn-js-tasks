const checkIsSimple = (int)=>{
    let isSimple;
    if(int<2){
       isSimple = false
    }
     if(int === 2){
        isSimple=true
    } 
      for(let i=2;i<int;i++){
        if(int % i === 0){
           
            isSimple = false
            break
        }else{
            isSimple = true
        }  
      }
      if(isSimple){
        return 'Число простое'
      }else{
        return 'Число составное'
      }
}


let int =100
console.log(checkIsSimple(int))