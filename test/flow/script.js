document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const answer1 = document.getElementById('question1').value.trim().toLowerCase();
    const answer2 = document.getElementById('question2').value.trim().toLowerCase();
    const answer3 = document.getElementById('question3').value.trim().toLowerCase();
    const answer4 = document.getElementById('question4').value.trim().toLowerCase();
    const answer5 = document.getElementById('question5').value.trim().toLowerCase();
    const answer6 = document.getElementById('question6').value.trim().toLowerCase();
    const answer7 = document.getElementById('question7').value.trim().toLowerCase();
    const answer8 = document.getElementById('question8').value.trim().toLowerCase();
    const answer9 = document.getElementById('question9').value.trim().toLowerCase();
    const answer10 = document.getElementById('question10').value.trim().toLowerCase();
    const answer11 = document.getElementById('question11').value.trim().toLowerCase();
    const answer12 = document.getElementById('question12').value.trim().toLowerCase();

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
    if (answer4 === 'dass') {
      score++;
    }
    if (answer5 === 'schuld') {
        score++;
      }
    if (answer6 === 'todkrank') {
        score++;
      }
      if (answer7 === '84') {
        score++;
      }
      if (answer8 === '48') {
        score++;
      }
      if (answer9 === '63') {
        score++;
      }
      if (answer10 === '14') {
        score++;
      }
      if (answer11 === '50') {
        score++;
      }
      if (answer12 === '4') {
        score++;
      }

    const totalQuestions = 12;
    const percentage = (score / totalQuestions) * 100;
  
    document.getElementById('result').innerHTML = `You have reached ${percentage}%  <br> <p>Please take now a Screenshot to send it to our E-Mail</p> <br> <form action="thx.html"><button type="submit">Next</button></form>`;
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
