const question = [
    {
        ask : "What depth range do you live at?",
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
            answer : {
                text : "<10°C",
                score : ["goblin", "greenland", "frilled", "pygmy"]
            },
            answer : {
                text : "10°C - 20°C",
                score : ["angel", "blue", "thresher", "gWhite", "basking"]
            },
            answer : {
                text : "20°C+",
                score : ["tiger", "blackTip", "zebra", "nurse", "gHammer", "oceanic", "whale"]
            },
            answer : {
                text : " ",
                score : []
            }
            },
        {
                ask : " ",
                answer : {
                    text : " ",
                    score : []
                },
                answer : {
                    text : " ",
                    score : []
                },
                answer : {
                    text : " ",
                    score : []
                },
                answer : {
                    text : " ",
                    score : []
                }
                },
            {
                    ask : " ",
                    answer : {
                        text : " ",
                        score : []
                    },
                    answer : {
                        text : " ",
                        score : []
                    },
                    answer : {
                        text : " ",
                        score : []
                    },
                    answer : {
                        text : " ",
                        score : []
                    }
                    },
                {
                        ask : " ",
                        answer : {
                            text : " ",
                            score : []
                        },
                        answer : {
                            text : " ",
                            score : []
                        },
                        answer : {
                            text : " ",
                            score : []
                        },
                        answer : {
                            text : " ",
                            score : []
                        }
                        }
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

function recordScore() {

};

function nextQuestion(){

};

function showScore(){

};