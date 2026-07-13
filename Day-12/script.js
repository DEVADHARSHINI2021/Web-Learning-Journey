const quiz = [
    {
        question: "Which language runs inside a browser?",
        options: [
            "Python",
            "Java",
            "JavaScript",
            "C"
        ],
        answer: "JavaScript"
    },

    {
        question: "Which tag links JavaScript?",
        options: [
            "<css>",
            "<script>",
            "<style>",
            "<link>"
        ],
        answer: "<script>"
    },

    {
        question: "DOM stands for?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Desktop Object Model",
            "Document Order Method"
        ],
        answer: "Document Object Model"
    }
];

const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

    options.innerHTML="";

    question.textContent =
        quiz[currentQuestion].question;

    quiz[currentQuestion].options.forEach(function(option){

        const btn = document.createElement("button");

        btn.textContent = option;

        btn.classList.add("option");

        btn.addEventListener("click",function(){

            if(option===quiz[currentQuestion].answer){

                btn.classList.add("correct");
                score++;

            }
            else{

                btn.classList.add("wrong");

            }

            const allButtons =
                document.querySelectorAll(".option");

            allButtons.forEach(function(button){

                button.disabled=true;

            });

        });

        options.appendChild(btn);

    });

}

nextBtn.addEventListener("click",function(){

    currentQuestion++;

    if(currentQuestion<quiz.length){

        loadQuestion();

    }

    else{

        question.textContent="Quiz Finished!";

        options.innerHTML="";

        scoreText.textContent=
            `Your Score : ${score} / ${quiz.length}`;

        nextBtn.style.display="none";

    }

});

loadQuestion();