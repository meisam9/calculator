const calculator=document.querySelector('.calculator')
const display=calculator.querySelector('.calculator__display')
const keys=calculator.querySelector('.calculator__keys')
let equalDone=false
function clickHandle(e){
    if(!e.target.closest('button')) return

    const key=e.target
    const keyValue=key.textContent
    const displayValue=display.textContent
    const {type}=key.dataset
    const {previousKeyType}=calculator.dataset
    
    if(type==="number"){
        if(displayValue === "0" || previousKeyType === "operator" || equalDone===true){
            display.textContent=keyValue
            equalDone=false
        }else{
            display.textContent=displayValue + keyValue
        }
    }


    if(type==="operator"){
        const operatorKeys=calculator.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(key=>key.dataset.state='')
        key.dataset.state="selected"

        calculator.dataset.firstNumber=displayValue
        calculator.dataset.operator=key.dataset.key
        display.textContent="0"
    }

    if(type==="equal"){
        equalOp()
    }

    if(type==="clear"){
        display.textContent="0"
        delete calculator.dataset.firstNumber
        delete calculator.dataset.operator
    }

    if(type==="decimal"){
        decimal()

    }
    calculator.dataset.previousKeyType=type
}

function keyHandle(e){
    const numbers=[1,2,3,4,5,6,7,8,9,0]
    const operators=["-", "*", "/", "+"]
    const equal=["Enter", "="]
    
    numbers.forEach(number=>{
        if(e.key===number.toString()){
            if(display.textContent==="0" || equalDone===true){
                display.textContent=e.key
                equalDone=false
            }
            
            else
            display.textContent+=e.key
        }
    })

    if(e.key==="Backspace"){
        if(display.textContent.length>1){
        let array=display.textContent.split('')
        array.pop()
        display.textContent=array.join('')
        }else{
            display.textContent-=display.textContent[display.textContent.length-1]
        }
    }
    
    operators.forEach(operator=>{
        if(e.key===operator && e.key==="+"){
            
            calculator.dataset.firstNumber=display.textContent
            display.textContent="0"
            calculator.dataset.operator=operator
        }
        
        if(e.key===operator && e.key==="-"){
        
            calculator.dataset.firstNumber=display.textContent
            display.textContent="0"
            calculator.dataset.operator=operator
            console.log(calculator.dataset.firstNumber)
        }
        
        if(e.key===operator && e.key==="*"){
            
            calculator.dataset.firstNumber=display.textContent
            display.textContent="0"
            calculator.dataset.operator=operator
        }
        
        if(e.key===operator && e.key==="/"){
            calculator.dataset.firstNumber=display.textContent
            display.textContent="0"
            calculator.dataset.operator=operator
        }

    })

    if(e.key === equal[0]  || e.key === equal[1]){
        equalOp()
    }

    if(e.key === '.'){
        decimal()
    }

}

window.addEventListener('keyup', keyHandle)
keys.addEventListener('click', clickHandle)

