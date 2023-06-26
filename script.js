const keys = document.getElementsByClassName("keys")[0];
const display = document.getElementsByClassName("display")[0];
var str='';
keys.addEventListener("click", (e)=>{
    const target = e.target;
    const value = target.innerHTML;
    if(target.classList.contains('all-clear')){
        allClear();
    }else if(target.classList.contains('key')){
        str=str+value;
        display.innerHTML=str;
    }else if(target.classList.contains('delete')){
        backspace();
    }else if(target.classList.contains('equal-to')){
        result();
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.key>=0 && e.key<=9 ||e .location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD && e.key!="Enter"){
        console.log(e.key);
        console.log(typeof(e.key));
        str=str+e.key;
        display.innerHTML=str;
    }else if(e.key==="Enter"||e.key==="Enter" && e.location === KeyboardEvent.DOM_KEY_LOCATION_NUMPAD){
        result();
    }else if(e.key==="Backspace"){
        backspace();
    }
})

function allClear(){
    str='';;
    display.innerHTML=str;
}

function backspace(){
    str=str.substring(0,str.length-1);
    display.innerHTML=str;
}

function result(){
    try{
        str=eval(str);
        str=str.toString();
        display.innerHTML=str;
    }catch(error){
        display.innerHTML=error;
    }
}


  
