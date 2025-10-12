const textDisplay = document.getElementById("text-display");
      const textInput = document.getElementById("text-input");
      const timerEl = document.getElementById("timer");
      const wpsEl = document.getElementById("wps");
      const accuracyEl = document.getElementById("accuracy");
      const startBtn = document.getElementById("start-btn");
      const themeBtn = document.getElementById("theme-btn");
      const difficultyEl = document.getElementById("difficulty");

      let timer = 30,
        timeInterval,
        isRunning = false;
      let currentText = "",
        typedCharacters = 0,
        correctCharacters = 0;

      const texts = {
        easy: [
          "The quick brown fox jumps over the lazy dog.",
          "Typing fast is fun.",
          "Hello world from JavaScript.",
        ],
        medium: [
          "Web development is a combination of creativity and logic.",
          "Typing speed tests are great practice for improving focus.",
          "JavaScript powers interactive websites all around the world.",
        ],
        hard: [
          "Consistency in practice will eventually lead to mastery of web development skills.",
          "Advanced applications require a strong foundation in JavaScript and problem solving.",
          "Typing tests not only improve accuracy but also enhance brain hand coordination significantly.",
        ],
      };

      function startTest() {
        timer = 30;
        typedCharacters = 0;
        correctCharacters = 0;
        isRunning = true;

        let diff = difficultyEl.value;
        currentText =
          texts[diff][Math.floor(Math.random() * texts[diff].length)];
        textDisplay.textContent = currentText;

        textInput.value = "";
        textInput.disabled = false;
        textInput.focus();
        timerEl.textContent = timer;
        wpsEl.textContent = 0;
        accuracyEl.textContent = 0;

        clearInterval(timeInterval);
        timeInterval = setInterval(updateTimer, 1000);
      }

      function updateTimer() {
        if (timer > 0) {
          timer--;
          timerEl.textContent = timer;
        } else {
          endTest();
        }
      }

      function endTest() {
        clearInterval(timeInterval);
        textInput.disabled = true;
        isRunning = false;
      }

      function calculateResults() {
        let words = textInput.value.trim().split(/\s+/).length;
        let elapsedTime = 30 - timer; // time spent typing
        let wps = elapsedTime > 0 ? (words / elapsedTime).toFixed(2) : 0;
        let accuracy =
          Math.round((correctCharacters / typedCharacters) * 100) || 0;

        wpsEl.textContent = wps;
        accuracyEl.textContent = accuracy;
      }

      textInput.addEventListener("input", () => {
        let inputText = textInput.value;
        typedCharacters++;

        let highlighted = "";
        correctCharacters = 0;
        for (let i = 0; i < currentText.length; i++) {
          if (i < inputText.length) {
            if (inputText[i] === currentText[i]) {
              correctCharacters++;
              highlighted += `<span class="correct">${currentText[i]}</span>`;
            } else {
              highlighted += `<span class="incorrect">${currentText[i]}</span>`;
            }
          } else {
            highlighted += currentText[i];
          }
        }
        textDisplay.innerHTML = highlighted;
        calculateResults();
      });

      startBtn.addEventListener("click", startTest);
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
      });