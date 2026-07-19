const game=document.getElementById("game");
const status=document.getElementById("status");
const restart=document.getElementById("restart");

const emojis=["🍎","🍌","🍇","🍉","🍓","🥝","🍒","🍍"];

let cards=[];
let firstCard=null;
let secondCard=null;
let lock=false;
let moves=0;
let matches=0;

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}

function startGame(){

    game.innerHTML="";

    moves=0;
    matches=0;

    status.textContent="Moves: 0";

    cards=[...emojis,...emojis];

    shuffle(cards);

    cards.forEach(emoji=>{

        const card=document.createElement("div");

        card.className="card";

        card.dataset.value=emoji;

        card.textContent="?";

        card.addEventListener("click",flipCard);

        game.appendChild(card);

    });

}

function flipCard(){

    if(lock) return;

    if(this.classList.contains("matched")) return;

    if(this===firstCard) return;

    this.textContent=this.dataset.value;

    this.classList.add("open");

    if(!firstCard){

        firstCard=this;

        return;

    }

    secondCard=this;

    lock=true;

    moves++;

    status.textContent="Moves: "+moves;

    if(firstCard.dataset.value===secondCard.dataset.value){

        firstCard.classList.add("matched");

        secondCard.classList.add("matched");

        matches++;

        resetTurn();

        if(matches===8){

            status.textContent="🎉 You won in "+moves+" moves!";

        }

    }else{

        setTimeout(()=>{

            firstCard.textContent="?";

            secondCard.textContent="?";

            firstCard.classList.remove("open");

            secondCard.classList.remove("open");

            resetTurn();

        },800);

    }

}

function resetTurn(){

    firstCard=null;

    secondCard=null;

    lock=false;

}

restart.addEventListener("click",startGame);

startGame();