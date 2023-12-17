let buttons=document.getElementsByTagName('button') //[]
let display=document.querySelector('p');//0
for(let button of buttons){
    button.onclick=function(){
        let input=this.innerText; //button .innertext
        changedisplay(input)
    }
}
 

function changedisplay(input){
   let currentval=display.innerText; //0 
   if(currentval=='0'){
    if(input!='AC' && input!='DE' && input!='='){ //1 0r 2 0r operator
        display.innerText='';
        display.innerText=input; //1 0r 2 //+
    }
   }else{
    if(input=='AC'){
        display.innerText='0';
    }
    else if(input=="DE"){
        display.innerText=display.innerText.substring(0,display.innerText.length-1) //string.substring(indexstart,indexend) and index end is excluded
        if(display.innerText==""){                                                  //s=789 s.substring(0,s.length-1)3-1=2==>0,1==>78
            display.innerText="0"
        }
    }
    else if(input!="AC" && input!="DE" && input!="="){
        display.innerText+=input; //i+1 ==> i=i+1
    }
    else if(input=='='){
        display.innerText=eval(display.innerText) //(78+9)=87

    }
   }
}