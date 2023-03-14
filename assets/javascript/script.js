console.log('Hello world!');

const startButton = document.getElementById('start');
startButton.addEventListener('click', function() {
    firstQuestion()
});

/*Add actual question/answers within questions*/
let questions = [
    {
        question: "What depth range do you live at?",
        answerOne: "0-400m",
        answerTwo: "400m+"
    },
    {
        question: "What average water temperature do you prefer?",
        answerOne: "<20°C",
        answerTwo: "20°C +"
    },
    {
        question: "What average water temperature do you prefer?",
        answerOne: "<10°C",
        answerTwo: "10°C +"
    },
    {
        question: "How great is your size?",
        answerOne: "<3.3m",
        answerTwo: "<7.4m"
    },
    {
        question: "How great is your size?",
        answerOne: "<3.5m",
        answerTwo: "<6.1m"
    },
    {
        question: "How great is your size?",
        answerOne: "<730cm",
        answerTwo: "<196cm"
    },
    {
        question: "How great is your size?",
        answerOne: "<8m",
        answerTwo: "<21m"
    },
    {
        question: "What is your prefered habitat?",
        answerOne: "Muddy/sandy banks",
        answerTwo: "Continental shelves/ Pelagic region"
    },
    {
        question: "What is your prefered habitat?",
        answerOne: "Migratory",
        answerTwo: "Coastal/ Atoll Islands"
    },
    {
        question: "What is your prefered habitat?",
        answerOne: "Tropic coral reefs",
        answerTwo: "Coral reefs/ Lagoons"
    },
    {
        question: "What is your prefered habitat?",
        answerOne: "Rocky or coral shelves/Mangroves",
        answerTwo: "Coastal/ Pelagic region"
    },
    {
        question: "What is your prefered habitat?",
        answerOne: "Deep continetal shelves",
        answerTwo: "North Atlantic/Arctic Sea"
    },
    {
        question: "What is your prefered habitat?",
        answerOne: "Epibenthic/ Benthic/ Pelagic region",
        answerTwo: "Mesopelagic region"
    },
    {
        question: "What is your prefered habitat?",
        answerOne: "Oceanic/ Epipelagic/ Open ocean",
        answerTwo: "Contintental Shelves"
    },
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

function firstQuestion(){
    for (let question of questions) {
    let htmlQOne = `
    <table class="center" id="quiz-display">
        <tr>
            <th>Question:</th>
            <th>${question.question}</th>
        </tr>
        <tr>
            <td>${question.answerOne}<button id="aOne" type="button" onclick="secondQuestion()"><i class="fa-solid fa-check"></i></button></td>
            <td>${question.answerTwo}<button id="aTwo" type="button" onclick="thirdQuestion()"><i class="fa-solid fa-check"></i></button></td>
        </tr>
    </table>`;
    document.getElementById('quiz-area').innerHTML = htmlQOne;
    return htmlQOne;
    } 
}

function secondQuestion() {
    for (let question of questions) {
        let htmlQOne = `
        <table class="center" id="quiz-display">
            <tr>
                <th>Question:</th>
                <th>${question.question[1]}</th>
            </tr>
            <tr>
                <td>${question.answerOne[1]}<button id="aOne" type="button"><i class="fa-solid fa-check"></i></button></td>
                <td>${question.answerTwo[1]}<button id="aTwo" type="button"><i class="fa-solid fa-check"></i></button></td>
            </tr>
        </table>`;
        document.getElementById('quiz-area').innerHTML = htmlQOne;
        return htmlQOne;
        } 
}

function thirdQuestion() {
    for (let question of questions) {
        let htmlQOne = `
        <table class="center" id="quiz-display">
            <tr>
                <th>Question:</th>
                <th>${question.question[2]}</th>
            </tr>
            <tr>
                <td>${question.answerOne[2]}<button id="aOne" type="button"><i class="fa-solid fa-check"></i></button></td>
                <td>${question.answerTwo[2]}<button id="aTwo" type="button"><i class="fa-solid fa-check"></i></button></td>
            </tr>
        </table>`;
        document.getElementById('quiz-area').innerHTML = htmlQOne;
        return htmlQOne;
        } 
}