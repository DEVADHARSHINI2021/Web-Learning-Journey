const quoteText = document.getElementById("quote").textContent.trim();

const input = document.getElementById("input");

const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");
const message = document.getElementById("message");

let startTime = null;
let timer = null;

function updateStats(){

    if(startTime===null) return;

    let seconds=Math.floor((Date.now()-startTime)/1000);

    timeEl.textContent=seconds;

    const typed=input.value;

    let correct=0;

    for(let i=0;i<typed.length;i++){

        if(typed[i]===quoteText[i]){
            correct++;
        }

    }

    let accuracy=typed.length===0
        ?100
        :Math.round((correct/typed.length)*100);

    accuracyEl.textContent=accuracy;

    let minutes=(Date.now()-startTime)/60000;

    let words=typed.trim()===""
        ?0
        :typed.trim().split(/\s+/).length;

    let wpm=minutes===0
        ?0
        :Math.round(words/minutes);

    wpmEl.textContent=wpm;

    if(typed===quoteText){

        clearInterval(timer);

        timer=null;

        input.disabled=true;

        message.textContent="🎉 Completed! Great Job!";
    }

}

input.addEventListener("input",()=>{

    if(startTime===null){

        startTime=Date.now();

        timer=setInterval(updateStats,1000);

    }

    updateStats();

});

restartBtn.addEventListener("click",()=>{

    clearInterval(timer);

    timer=null;

    startTime=null;

    input.disabled=false;

    input.value="";

    timeEl.textContent=0;
    wpmEl.textContent=0;
    accuracyEl.textContent=100;

    message.textContent="";

    input.focus();

});