const display1E1 = document.querySelector('.display1');
const display2E1 = document.querySelector('.display2');
const tempResultE1 = document.querySelector('.temp-res');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearAllE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let op = '';
let dot = false;

numbersE1.forEach( number => {
    number.addEventListener('click',(e)=> {
        if (e.target.innerText === '.' && !dot){
            dot = true;
        }
        else if(e.target.innerText === '.' && dot){
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
});

operationE1.forEach( operation => {
    operation.addEventListener('click',(e)=>{
        if(!dis2Num) result;
        dot = false;
        const opName = e.target.innerText;
        if (dis1Num && dis2Num && op){
            mathOperation();
        }else{
            result=parseFloat(dis2Num);
        }
        clearVariable(opName);
        op = opName;
        console.log(result);
    })
});

function clearVariable(name = ''){
    dis1Num += dis2Num+ ' ' + name + ' ';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempResultE1.innerText = result;
}
function mathOperation() {
    if(op === 'x'){
        result=parseFloat(result) * parseFloat(dis2Num);
    }
    else if(op === '+'){
        result=parseFloat(result) + parseFloat(dis2Num);
    }
    else if(op === '-'){
        result=parseFloat(result) - parseFloat(dis2Num);
    }
    else if(op === '/'){
        result=parseFloat(result) / parseFloat(dis2Num);
    }
    else if(op === '%'){
        result=parseFloat(result) % parseFloat(dis2Num);
    }
}

equalE1.addEventListener('click',(e) => {
    if(!dis1Num || !dis2Num) return;
    dot = false;
    mathOperation();
    clearVariable();
    display2E1.innerText = result;
    tempResultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

clearAllE1.addEventListener('click',(e) => {
    display1E1.innerText = '';
    display2E1.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultE1.innerText = '';
});

clearLastE1.addEventListener('click',(e) => {
    display2E1.innerText = '';
    dis2Num = '';
});

// window.addEventListener('keydown',(e) =>{
//     if (e.key === '0'||e.key === '0' ||  ) {
        
//     } else {
        
//     }
// })