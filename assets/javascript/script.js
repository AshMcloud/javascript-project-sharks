console.log('Hello world!');

const startButton = document.getElementById('start');
startButton.addEventListener('click', function() {
    startGame()
});

/*Add actual question/answers within questions*/
let questionOne = [
    {
        question: "What depth range do you live at?",
        answerOne: "0-400m",
        answerTwo: "400m+"
    },
];

let questionTwoA = [
    {
        question: "What average water temperature do you prefer?",
        answerOne: "<20°C",
        answerTwo: "20°C +"
    },
];

let questionTwoB = [
    {
        question: "What average water temperature do you prefer?",
        answerOne: "<10°C",
        answerTwo: "10°C +"
    },
];

let questionThreeA = [
    {
        question: "How great is your size?",
        answerOne: "<3.3m",
        answerTwo: "<7.4m"
    },
];

let questionThreeB = [
    {
        question: "How great is your size?",
        answerOne: "<3.5m",
        answerTwo: "<6.1m"
    },
];

let questionThreeC = [
    {
        question: "How great is your size?",
        answerOne: "<730cm",
        answerTwo: "<196cm"
    },
];

let questionThreeD = [
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
];

let questionFourA = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Muddy/sandy banks",
        answerTwo: "Continental shelves/ Pelagic region"
    },
];

let questionFourB = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Migratory",
        answerTwo: "Coastal/ Atoll Islands"
    },
];

let questionFourC = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Tropic coral reefs",
        answerTwo: "Coral reefs/ Lagoons"
    },
];

let questionFourD = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Rocky or coral shelves/Mangroves",
        answerTwo: "Coastal/ Pelagic region"
    },
];

let questionFourE = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Deep continetal shelves",
        answerTwo: "North Atlantic/Arctic Sea"
    },
];

let questionFourF = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Epibenthic/ Benthic/ Pelagic region",
        answerTwo: "Mesopelagic region"
    },
];

let questionFourG = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Oceanic/ Epipelagic/ Open ocean",
        answerTwo: "Contintental Shelves"
    },
];

let questionFourH = [
    {
        question: "What is your prefered habitat?",
        answerOne: "Coastal/ Continental Shelves",
        answerTwo: "Open ocean/ Pelagic region"
    },
];

let results = [
    {
        result: "Angel Shark",
        fact: " ",
        Image: " "
    },
    {
        result: "Blue Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Thresher Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Tiger Shark",
        fact: " ",
        Image: " "
    },
    {
        result: "Black Tip Reef Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Zebra Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Nursing Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Great Hammered Head",
        fact: " ",
        Image: " "

    },
    {
        result: "Goblin Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Greenland Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Frilled Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Pygmy Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Oceanic White Tip Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Great White Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Basking Shark",
        fact: " ",
        Image: " "

    },
    {
        result: "Whale Shark",
        fact: " ",
        Image: " "

    },
];


/*I want to iterate through each question individually before moving onto the next*/
function startGame() {
let htmlQOne = `
    <table class="center" id="quiz-display">
        <tr>
            <th class="info-display">Question:</th>
        </tr>
        `;
for (let question of questionOne){
    let firstQ = `
    <tr>
        <th>${question.question}</th>
    </tr>
    <tr>
        <td>${question.answerOne}</td><button><i class="fa-solid fa-check"></i></button>
        <td>${question.answerTwo}</td><button><i class="fa-solid fa-check"></i></button>
    </tr>`;
htmlQOne += firstQ
}
htmlQOne += `
</table>
`;
return htmlQOne;

document.getElementsByClassName('quiz-area').innerHTML = htmlQOne;
/** buttons on click move to new fuction for next question*/
}
/*after all answers tallied I want to run a new fuction for the results*/