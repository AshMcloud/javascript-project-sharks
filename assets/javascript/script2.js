const question = [
    {
        ask : "What depth range do you live at?",
        answer : {
            text : "0-400m",
            score : ["angel", "blue", "thresher", "blackTip", "zebra", "nurse", "gHammer"]
        },
        answer : {
            text : "400m+",
            score : ["goblin", "greenland", "frilled", "pygmy", "oceanic", "gWhite", "basking", "whale"]
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

};

function recordScore() {

};

function nextQuestion(){

};

function showScore(){

};