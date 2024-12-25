let inputEl= document.querySelector('input');
let btns=document.querySelectorAll('button');
for(let button of btns){
    button.addEventListener('click',function(e){
        let btnText=e.target.innerText;
        if(btnText==='C'){
            inputEl.value="";
        }
        else if(btnText=== '='){
            try{
                inputEl.value= eval(inputEl.value);
            }
            catch(e){
                inputEl.value="INVALID"
            }
        }
        else{
            inputEl.value=inputEl.value+btnText;
        }
    })
}