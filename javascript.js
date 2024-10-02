let playerScores = { team1: 0, team2: 0 };
let currentRound = 1;
let correctAnswers = {};
let currentTeam = '';
let countdownInterval;
let roundTimer;
let timeLimit = 30000; // 30 seconds for each player

// Predefined questions and answers
const questions = [
    { question: "Name something you do in the morning.", answers: ["Brush Teeth", "Take a Shower", "Eat Breakfast", "Get Dressed"] },
    { question: "Name a popular pizza topping.", answers: ["Cheese", "Pepperoni", "Mushrooms", "Olives"] },
    { question: "Name a fruit you might find in a fruit salad.", answers: ["Apple", "Banana", "Grapes", "Strawberry"] },
    { question: "Name a type of transportation.", answers: ["Car", "Bus", "Bicycle", "Train"] },
];

// Start the game
document.getElementById('set-answers').addEventListener('click', startGame);

function startGame() {
    playerScores = { team1: 0, team2: 0 };
    currentRound = 1;
    document.getElementById('team1-score').innerText = playerScores.team1;
    document.getElementById('team2-score').innerText = playerScores.team2;
    document.getElementById('team1-buzzer').disabled = false;
    document.getElementById('team2-buzzer').disabled = false;

    // Set the first question and answers
    setQuestion();
}

// Set question and answers
function setQuestion() {
    let currentQuestion = questions[currentRound - 1];
    correctAnswers = currentQuestion.answers;

    // Update the answer list display
    document.querySelectorAll('#answers li').forEach((li, index) => {
        li.textContent = correctAnswers[index] || "Answer " + (index + 1);
    });

    alert(currentQuestion.question);
}

// Team buzzers
document.getElementById('team1-buzzer').addEventListener('click', () => {
    handleBuzzerPress('team1');
});

document.getElementById('team2-buzzer').addEventListener('click', () => {
    handleBuzzerPress('team2');
});

function handleBuzzerPress(team) {
    if (!currentTeam) {
        currentTeam = team;
        document.getElementById('team1-buzzer').disabled = true;
        document.getElementById('team2-buzzer').disabled = true;
        document.getElementById('pass-play-controls').style.display = 'block';
        resetCountdown(); // Start 30 second countdown for answering
    }
}

// Play button only, no pass-back
document.getElementById('play-button').addEventListener('click', () => {
    document.getElementById('pass-play-controls').style.display = 'none';
});

document.getElementById('answer-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let userAnswer = document.getElementById('user-answer').value;
    validateAnswer(userAnswer);
});

function validateAnswer(userAnswer) {
    if (correctAnswers.includes(userAnswer)) {
        alert('Correct! Points added to ' + currentTeam + '.');
        addScore(currentTeam);
    } else {
        alert('Incorrect! The next team will answer.');
    }

    if (currentTeam === 'team1') {
        switchToTeam('team2');
    } else {
        endRound();
    }
}

function switchToTeam(team) {
    currentTeam = team;
    document.getElementById('pass-play-controls').style.display = 'block';
    resetCountdown(); // Reset countdown for second team
}

// Add score to the current team
function addScore(team) {
    playerScores[team] += 10; // Adjust point system as needed
    updateScores();
}

// Update the score display
function updateScores() {
    document.getElementById('team1-score').innerText = playerScores.team1;
    document.getElementById('team2-score').innerText = playerScores.team2;
}

// Start the countdown for the current team
function startCountdown() {
    let timeLeft = 30;
    document.getElementById('countdown-timer').style.display = 'block';
    document.getElementById('time-progress').value = timeLeft;

    countdownInterval = setInterval(function () {
        timeLeft--;
        document.getElementById('countdown-timer').innerText = timeLeft;
        document.getElementById('time-progress').value = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            alert('Time up for ' + currentTeam + '!');
            if (currentTeam === 'team1') {
                switchToTeam('team2');
            } else {
                endRound();
            }
        }
    }, 1000);
}

// Reset the countdown when switching teams
function resetCountdown() {
    clearInterval(countdownInterval);
    startCountdown();
}

// End the round after both teams have had their chance
function endRound() {
    clearInterval(countdownInterval);
    let winner;
    if (playerScores.team1 > playerScores.team2) {
        winner = document.getElementById('team1-name').value;
    } else if (playerScores.team2 > playerScores.team1) {
        winner = document.getElementById('team2-name').value
    } else {
        winner = 'It\'s a tie!';
    }

    alert(`Game Over! The winner is: ${winner}.`);
    document.getElementById('team1-buzzer').disabled = true;
    document.getElementById('team2-buzzer').disabled = true;
    document.getElementById('pass-play-controls').style.display = 'none';
    document.getElementById('countdown-timer').style.display = 'none';
}
