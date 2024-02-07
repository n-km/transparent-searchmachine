document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const answer1 = document.getElementById('question1').value.trim().toLowerCase();
    const answer2 = document.getElementById('question2').value.trim().toLowerCase();
    const answer3 = document.getElementById('question3').value.trim().toLowerCase();
  
    let score = 0;
    if (answer1 === 'Holz' || answer1 === 'holz') {
      score++;
    }
    if (answer2 === 'Auto' || answer2 === 'auto') {
      score++;
    }
    if (answer3 === 'Wind' || answer3 === 'wind') {
      score++;
    }
  
    const totalQuestions = 3;
    const percentage = (score / totalQuestions) * 100;
  
    document.getElementById('result').innerHTML = `Du hast ${percentage}% erreicht. <a href="thx.html">Weiter</a>`;
  });
  



  // ||||||||||||||| 
  // |||||Timer|||||
  // ||||||||||||||| 



  let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 600;
let timerInterval;

// Timer automatisch starten
window.onload = startTimer;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(setTime, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 600;
    timerInterval = null;
    setTime();
}

function setTime() {
    --totalSeconds;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutesLabel.innerHTML = pad(minutes);
    secondsLabel.innerHTML = pad(seconds);

    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        // Fügen Sie hier Ihre speziellen Effekte hinzu, z. B. eine Benachrichtigung oder Animationen.
        alert("Zeit ist abgelaufen!");
    }
}

function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
