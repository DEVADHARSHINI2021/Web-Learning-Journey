const quote = document.getElementById("quote");
const input = document.getElementById("input");

const time = document.getElementById("time");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");

const restart = document.getElementById("restart");

let startTime = null;
let timer = null;

input.addEventListener("input", () => {

    if(startTime===null){

        startTime=Date.now();

        timer=setInterval(updateTime,1000);

    }

    calculate();
});

function updateTime(){

    let seconds=Math.floor((Date.now()-startTime)/1000);

    time.textContent=seconds;

}

function calculate(){

    const typed=input.value;

    const original=quote.textContent;

    let correct=0;

    for(let i=0;i<typed.length;i++){

        if(typed[i]===original[i]){
            correct++;
        }

    }

    const acc=Math.round((correct/original.length)*100);

    accuracy.textContent=isNaN(acc)?0:acc;

    const elapsed=(Date.now()-startTime)/60000;

    const words=typed.trim().split(/\s+/).length;

    const speed=Math.round(words/elapsed);

    wpm.textContent=isNaN(speed)?0:speed;

    if(typed===original){

        clearInterval(timer);

        input.disabled=true;

    }

}

restart.addEventListener("click",()=>{

    clearInterval(timer);

    startTime=null;

    timer=null;

    input.value="";

    input.disabled=false;

    time.textContent=0;

    wpm.textContent=0;

    accuracy.textContent=0;

});