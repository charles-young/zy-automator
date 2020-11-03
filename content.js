function solveAll() {
    solveAnimations();
    solveMultipleChoice();
    solveShortAnswer();
}

function solveAnimations() {
    for (const doubleSpeedBtn of document.querySelectorAll('[aria-label="2x speed"]'))
        doubleSpeedBtn.click()
    for (const startBtn of document.getElementsByClassName("start-button"))
        startBtn.click();

    setInterval(function () {
        if (document.getElementsByClassName("play-button").length > 0) {
            let playBtns = document.getElementsByClassName('play-button')
            for (let i = 0; i < playBtns.length; i++) {
                if (!playBtns[i]
                    .className
                    .replace(/\s+/g, ' ')
                    .split(' ')
                    .includes('rotate-180')) {
                    playBtns[i].click();
                }
            }
        }
    }, 1500);
}

function solveMultipleChoice() {
    for (const radio of document.querySelectorAll('input[type=radio]'))
        radio.click()
}

function solveShortAnswer() {
    for (const answerBtn of document.getElementsByClassName('show-answer-button')) {
        answerBtn.click();
        answerBtn.click();
    }

    let answers = document.getElementsByClassName('forfeit-answer');
    let answerBoxes = document.getElementsByClassName('zb-text-area');

    for (let i = 0; i < answers.length; i++) {
        answerBoxes[i].focus();
        answerBoxes[i].select();
        answerBoxes[i].value = answers[i].innerHTML;
    }

    // tried simulating keystrokes and mouse clicks but it still doesn't register the answer until the user clicks on the box :/

    for (const checkBtn of document.getElementsByClassName('check-button')) {
        checkBtn.click();
        checkBtn.click();
    }
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.message) {
            case "solveAll":
                solveAll();
                break;
            case "solveAnimations":
                solveAnimations();
                break;
            case "solveMC":
                solveMultipleChoice();
                break;
            case "solveSA":
                solveShortAnswer();
                break;
            default:
                console.log("Unknown message: " + request.message);
        }
    }
);