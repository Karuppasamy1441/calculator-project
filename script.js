const display=document.getElementById("display");



display.addEventListener('keydown',function(event){
   
    if((event.key <'0' || event.key >'9')&& event.key !=='Backspace'){
        event.preventDefault();
        alert('"Only number are allowed"');
    }
})

function element(input){
    display.style.color='black';
    display.style.textAlign='right';
         display.value +=input; 
}
function clearDisplay() {
    display.value="";
}

function calculate(){
    try{ 
        display.value=eval(display.value);
    }catch(error){
        display.value="ERROR";
        display.style.textAlign='center';
        display.style.color='red';
    }
    
}