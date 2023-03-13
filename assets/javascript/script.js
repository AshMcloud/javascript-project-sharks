console.log('Hello world!');

const startButton = document.getElementById('start');
startButton.addEventListener('click', function() {
    startGame();
});

/*Add actual question/answers within questions*/
let questionOne = [
    {
        question: "What depth range do you live at?",
        answerOne: "0-400m",
        answerTwo: "400m+"
    },
]

let questionTwoA = [
    {
        question: "What average water temperature do you prefer?",
        answerOne: "<20°C",
        answerTwo: "20°C +"
    },
]

let questionTwoB = [
    {
        question: "What average water temperature do you prefer?",
        answerOne: "<10°C",
        answerTwo: "10°C +"
    },
]

let questionThreeA = [
    {
        question: "How great is your size?",
        answerOne: "<3.3m",
        answerTwo: "<7.4m"
    },
]

let questionThreeB = [
    {
        question: "How great is your size?",
        answerOne: "<3.5m",
        answerTwo: "<6.1m"
    },
]

let questionThreeC = [
    {
        question: "How great is your size?",
        answerOne: "<730cm",
        answerTwo: "<196cm"
    },
]

let questionThreeD = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourA = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourB = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourC = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourD = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourE = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourF = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourG = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]

let questionFourH = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
]
let result1 = " "

let result2 = " "

let result3 = " "

let result4 = " "

let result5 = " "

let result6 = " "

let result7 = " "

let result8 = " "

let result9 = " "

let result10 = " "

let result11 = " "

let result12 = " "

let result13 = " "

let result14 = " "

let result15 = " "

let result16 = " "


/*I want to iterate through each question individually before moving onto the next*/
function startGame() {
let html = `
    <table class="center" id="quiz-display">
        <tr>
            <th class="info-display">Question:</th>
        </tr>
        `;
for (let question of questionOne){
    let firstQ = `
    <tr>
        <th>${question.questionOne}</th>
    </tr>
    <tr>
        <td>${answerOne.questionOne}</td>
        <td>${answerTwo.questionOne}</td>
    </tr>`;
}

firstQ += `</table>`;

return firstQ;

}

let game = startGame();

document.getElementsByClassName('quiz-area').innerHTML = game;

/*after all answers tallied I want to run a new fuction for the results*/