let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

function appendNumber(value){
    currentInput += value
    display.textContent = currentInput
}

function appendoperator(operator){
if(currentInput === "" && operator !== ".") return
currentInput += operator;
    display.textContent = currentInput;
}

function calculate (){
    try {
                let result = eval(currentInput);         
        if (typeof result === 'number' && isFinite(result)) {            
            if (!Number.isInteger(result)) { 
                result = result.toFixed(2); 
            }            
            currentInput = String(result); 
            display.textContent = currentInput;
        } else {            
            throw new Error("Resultado inválido"); 
        }
    } catch(error){ 
        console.error("Erro na calculadora:", error); 
        display.textContent = "Error"; 
        currentInput = ""; 
    }
}
function clearDisplay(){
    currentInput = ""
    display.textContent = currentInput
}