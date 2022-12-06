function digitalRoot(n) {
    // ...
    if(n<10){
      return n
    }else {
        let numbers = convertNumberToArrayString(n)
        let sum = numbers.reduce((a,b)=> a+b)
        while(sum>9){
            numbers = convertNumberToArrayString(sum)
           sum= numbers.reduce((a,b)=> a+b)
        }
        console.log(sum)
    }
   
  }
  
  function convertNumberToArrayString(n){
     let num = n.toString()
    let numbers = []
    for(let i = 0; i<num.length; i++){
      numbers.push(Number(num[i]))
    }
    return numbers
  }

  console.log(digitalRoot(77))