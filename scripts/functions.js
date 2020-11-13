

function calculate(firstNumber, operator, secondNumber){
    firstNumber.includes('.')?firstNumber= parseFloat(firstNumber): firstNumber=parseInt(firstNumber)
     secondNumber.includes('.')?secondNumber= parseFloat(secondNumber): secondNumber=parseInt(secondNumber)
     let result=''
     if(operator === "plus"  || operator==="+") result=firstNumber+secondNumber
     if(operator === "minus" || operator==="-") result=firstNumber-secondNumber
     if(operator === "divide" || operator === "/") result=firstNumber/secondNumber
     if(operator === "times" || operator === "*") result= firstNumber * secondNumber
     equalDone=true
    //  console.log(result)
    //  let deci=result.toString().split('.')
    //  if(deci.length>1){
    //      if(deci[1].length>3)
    //      return result.toFixed(3)
    //  }else 
    return result
}

function equalOp(){
    const firstNumber=calculator.dataset.firstNumber
    const operator=calculator.dataset.operator
    const secondNumber=display.textContent
    if( typeof( firstNumber) !== "undefined" )
        display.textContent=calculate(firstNumber, operator, secondNumber)
    else return
}


function decimal(){
    if(!display.textContent.includes(".")){
        display.textContent+="."
        equalDone=false
    }
}