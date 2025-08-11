const display = document.getElementById("display");
let previousNum = "";
let currentNum = "";
let operator = ""; 

function pressedNum(num){
    currentNum += num;
    display.textContent = currentNum;
}

function pressedOperator(op){
    if (currentNum = ""){
        return;
    }
    previousNum = currentNum;
    operator = op;
    currentNum ="";
}

function calculate(){
    let result;
    const prev = parseFloat(previousNum);
    const curr = parseFloat(currentNum); //I used parseFloat() because it allows us to work with decimals unlike Number()

    if (isNaN(prev) || isNaN(curr)){
        return;
    }

    switch (operator){
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/': 
            if(curr === 0){
                display.textContent = "You cannot divide by 0";
                display.style.fontSize = "1.1rem";
                return;
            }
                result = prev / curr;
                break;

            default: return;
    }

    display.textContent = String(result);
    currentNum = String(result);
    previousNum = "";
    operator = "";
    console.log(result);
};


function clearResult(){
    display.textContent = ""; 
    currentNum = "";
    previousNum = "";
    operator = "";
};

function deleteLastInput(){
    currentNum = currentNum.slice(0, -1);
    display.textContent = currentNum;
}

