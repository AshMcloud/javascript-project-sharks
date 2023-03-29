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
    {
        ask : "What is your prefered habitat?",
        answer : [
            {
                text : "Continental shelves",
                score : ["blue", "goblin", "gWhite", "basking"]
            },
            {
                text : "Coral reefs, sandy/muddy banks, mangroves & lagoons",
                score : ["blackTip", "nurse", "zebra","angel", "tiger", "nurse"]
            },
            {
                text : "Pelagic/Open ocean",
                score : ["blue", "thresher", "gHammer", "oceanic", "gWhite", "whale"]
            },
            {
                text : "Deep, dark & cold!",
                score : ["goblin", "greenland", "frilled", "pygmy"]
            }
        ]
    },
    {
        ask : "?",
        answer : [
            {
                text : "ooh",
                score : [" "]
            },
            {
                text : "eeeh",
                score : [" "]
            },
            {
                text : "oooHooo",
                score : [" "]
            },
            {
                text : "ahAH",
                score : [" "]
            }
        ]
    },
    {
        ask : "?",
        answer : [
            {
                text : "ooh",
                score : [" "]
            },
            {
                text : "eeeh",
                score : [" "]
            },
            {
                text : "oooHooo",
                score : [" "]
            },
            {
                text : "ahAH",
                score : [" "]
            }
        ]
    },
    {
        ask : "?",
        answer : [
            {
                text : "ooh",
                score : [" "]
            },
            {
                text : "eeeh",
                score : [" "]
            },
            {
                text : "oooHooo",
                score : [" "]
            },
            {
                text : "ahAH",
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
    alert(document.getElementById('answer-one').innerHTML)
});
/** Add a way to display "you answered" along with the button clicked*/

let buttonTwo = document.getElementById('answer-two');
buttonTwo.addEventListener("click", function(){
    alert(document.getElementById('answer-two').innerHTML)
});

let buttonThree = document.getElementById('answer-three');
buttonThree.addEventListener("click", function(){
    alert(document.getElementById('answer-three').innerHTML)
});

let buttonFour = document.getElementById('answer-four');
buttonFour.addEventListener("click", function(){
    alert(document.getElementById('answer-four').innerHTML)
});

function storeScore() {

};

function nextQuestion(){
    let displayNextQuestion = document.getElementsByClassName('button');
    displayNextQuestion.addEventListener("click", function(){
        var arrayLength = showQuestions.length;
        for (var i = 0; i < arrayLength; i++) {
        }
    })
};

function showScore(){

};