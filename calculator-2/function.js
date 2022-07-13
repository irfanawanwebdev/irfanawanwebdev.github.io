let screen = document.getElementById('Text');
let buttons = document.querySelectorAll('button');
let textValue ='';
for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if (buttonText=='X') {
            buttonText='*';
            textValue += buttonText;
            text.value = textValue;
        }
        else if(buttonText=='C'){
            textValue='';
            text.value = textValue;
        }
        else if(buttonText=='DEL'){
            textValue='';
            text.value = textValue;
        }
        else if(buttonText=='='){
            text.value = eval(textValue);
        }
        else if(buttonText=='x2'){
            textValue = buttonText*buttonText;
            text.value = textValue;
        }
         else {
            textValue += buttonText;
            text.value = textValue;
            
        }
    })
}