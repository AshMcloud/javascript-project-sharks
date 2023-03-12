console.log('Hello world!');

const startButton = document.getElementById('start');
startButton.addEventListener('click', function() {
    startGame();
});

/*Add actual question/answers within questions*/
let questions = [
    {
        question: "A1",
        answerOne: "AA",
        answerTwo: "AB",
        answerThree: "AC",
        answerFour: "AD"
    },
    {
        question: "B2",
        answerOne: "BA",
        answerTwo: "BB",
        answerThree: "BC",
        answerFour: "BD"
    },
    {
        question: "C3",
        answerOne: "CA",
        answerTwo: "CB",
        answerThree: "CC",
        answerFour: "CD"
    },
    {
        question: "D4",
        answerOne: "DA",
        answerTwo: "DB",
        answerThree: "DC",
        answerFour: "DD"
    },
]
/*I want to iterate through each question individually before moving onto the next*/
function startGame() {
let html = `
    <table class="center" id="quiz-display">
        <tr>
            <th class="info-display">Question:</th>
        </tr>
        `;
for (let question of questions){
    let firstQ = `
    <tr>
        <th>${question.questions}</th>
    </tr>
    <tr>
        <td>${answerOne.questions}</td>
        <td>${answerTwo.questions}</td>
        <td>${answerThree.questions}</td>
        <td>${answerFour.questions}</td>
    </tr>`;
}

firstQ += `</table>`;

 return firstQ;

}

let game = startGame();

document.getElementsByClassName('quiz-area').innerHTML = game;

/*after all answers tallied I want to run a new fuction for the results*/