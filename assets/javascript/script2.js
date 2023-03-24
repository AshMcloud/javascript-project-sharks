const question = [
    {
        ask : "What ocean depth range do you live at?",
        answer : [
            {
                text : "0-400m",
                score : ["angel", "blue", "thresher", "blackTip", "zebra", "nurse", "gHammer"]
            },
            {
                text : "400m+",
                score : ["goblin", "greenland", "frilled", "pygmy", "oceanic", "gWhite", "basking", "whale"]
            },
            {
                text : "ah",
                score : [" "]
            },
            {
                text : "eh",
                score : [" "]
            }
        ]
    },
    {
        ask : "What average water temperature do you prefer?",
        answer : [
            {
                text : "<10°C",
                score : ["goblin", "greenland", "frilled", "pygmy"]
            },
            {
                text : "10°C - 20°C",
                score : ["angel", "blue", "thresher", "gWhite", "basking"]
            },
            {
                text : "20°C+",
                score : ["tiger", "blackTip", "zebra", "nurse", "gHammer", "oceanic", "whale"]
            },
            {
                text : "eh",
                score : [" "]
            }
        ]
    },
];

let begin = document.getElementById('start');

begin.addEventListener("click", function(){
    showQuestions()
});

function showQuestions() {
let questionArea = document.getElementById('ask-area').innerHTML = question[0].ask;
let firstAnswer = document.getElementById('answer-one').innerHTML = question[0].answer[0].text;
let secondAnswer = document.getElementById('answer-two').innerHTML = question[0].answer[1].text;
let thirdAnswer = document.getElementById('answer-three').innerHTML = question[0].answer[2].text;
let fourthAnswer = document.getElementById('answer-four').innerHTML = question[0].answer[3].text;
};

let buttonOne = document.getElementById('answer-one');
buttonOne.addEventListener("click", function(){
    getScore()
});

let buttonTwo = document.getElementById('answer-two');
buttonTwo.addEventListener("click", function(){
    getScore()
});

let buttonThree = document.getElementById('answer-three');
buttonThree.addEventListener("click", function(){
    getScore()
});

let buttonFour = document.getElementById('answer-four');
buttonFour.addEventListener("click", function(){
    getScore()
});

function getScore() {
alert("clicked")
};

function nextQuestion(){

};

function showScore(){

};