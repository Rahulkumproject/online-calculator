let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenvalue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttontext=e.target.innerText;
        size=screenvalue.length-1;
        console.log(buttontext);
        if(buttontext=='x'){
            buttontext='*';
            screenvalue+=buttontext;
            screen.value=screenvalue;
        }else if(buttontext=='rem'){
            buttontext='%';
            screenvalue+=buttontext;
            screen.value=screenvalue;
        }
        else if(buttontext=='C'){
            screenvalue="";
            screen.value=screenvalue;
        }else if(buttontext=='←'){
            screenvalue=screenvalue.toString();
            screenvalue=screenvalue.slice(0,size);
            screen.value=screenvalue;
        }else if(buttontext=='='){
            if(screenvalue.includes('√')){
                screenvalue=screenvalue.slice(1,size+1);
                screenvalue=Math.sqrt(screenvalue);
                screen.value=screenvalue;
            }else if(screenvalue.includes('sin')){
                screenvalue=screenvalue.slice(4,size);
                screenvalue=screenvalue*((2*Math.PI)/360);
                screenvalue=Math.sin(screenvalue);
                screen.value=screenvalue;
            }else if(screenvalue.includes('cos')){
                screenvalue=screenvalue.slice(4,size);
                screenvalue=screenvalue*((2*Math.PI)/360);
                screenvalue=Math.cos(screenvalue);
                screen.value=screenvalue;
            }
            else if(screenvalue.includes('tan')){
                screenvalue=screenvalue.slice(4,size);
                screenvalue=screenvalue*((2*Math.PI)/360);
                screenvalue=Math.tan(screenvalue);
                screen.value=screenvalue;
            }else{
            screen.value=eval(screenvalue);
            }
        }else{
            screenvalue+=buttontext;
            screen.value=screenvalue;
        }
    })
}