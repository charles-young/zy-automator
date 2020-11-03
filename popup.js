document.addEventListener('DOMContentLoaded', function () {
    let solveAll = document.getElementById('solveAll');
    let solveAnimations = document.getElementById('solveAnimations');
    let solveMC = document.getElementById('solveMC');
    let solveSA = document.getElementById('solveSA');


    solveAll.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"message": "solveAll"});
        });
    });

    solveAnimations.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"message": "solveAnimations"});
        });
    });

    solveMC.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"message": "solveMC"});
        });
    });

    solveSA.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"message": "solveSA"});
        });
    });
});