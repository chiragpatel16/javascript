// const quizData = [
//     {
//       question: "Which planet is known as the Red Planet?",
//       options: ["Mars", "Earth", "Venus", "Jupiter"],
//       answer: "Mars"
//     },
//     {
//       question: "Who developed the theory of relativity?",
//       options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
//       answer: "Albert Einstein"
//     },
//     {
//       question: "What is the smallest country in the world?",
//       options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
//       answer: "Vatican City"
//     },
//     {
//       question: "What is the longest river in the world?",
//       options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
//       answer: "Nile River"
//     },
//     {
//       question: "Who was the first president of the United States?",
//       options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
//       answer: "George Washington"
//     },
//     {
//       question: "In what year did World War II end?",
//       options: ["1941", "1945", "1950", "1939"],
//       answer: "1945"
//     },
//     {
//       question: "Which chemical element has the symbol 'O'?",
//       options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
//       answer: "Oxygen"
//     },
//     {
//       question: "What is the capital city of Japan?",
//       options: ["Seoul", "Beijing", "Tokyo", "Kyoto"],
//       answer: "Tokyo"
//     },
//     {
//       question: "Who painted the 'Starry Night'?",
//       options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
//       answer: "Vincent van Gogh"
//     },
//     {
//       question: "What is the largest ocean on Earth?",
//       options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//       answer: "Pacific Ocean"
//     }
//   ];
  
//   let shuffledQuestions = [];
//   let currentQuestion = 0;
//   let score = 0;
//   let timeLeft = 60;
//   let timer;
  
//   function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
//   }
  
//   function loadQuestion() {
//     clearInterval(timer);
  
//     if (currentQuestion >= shuffledQuestions.length) {
//       const totalQuestions = shuffledQuestions.length;
//       const incorrect = totalQuestions - score;
  
//       document.getElementById("quizContainer").style.display = "none";
//       document.getElementById("timer").style.display = "none";
//       document.getElementById("restartBtn").style.display = "inline-block";
  
//       document.getElementById("result").innerHTML = `
//         <h3>Your Score: ${score}/${totalQuestions}</h3>
//         <p style="color: green;">✅ Correct Answers: ${score}</p>
//         <p style="color: red;">❌ Incorrect Answers: ${incorrect}</p>
//       `;
//       return;
//     }
  
//     const current = shuffledQuestions[currentQuestion];
//     document.getElementById("question").textContent = current.question;
//     const optionsHtml = current.options.map(opt => `
//       <label>
//         <input type="radio" name="option" value="${opt}"> ${opt}
//       </label>
//     `).join('');
//     document.getElementById("options").innerHTML = optionsHtml;
  
//     timeLeft = 60;
//     document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
//     timer = setInterval(() => {
//       timeLeft--;
//       document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
//       if (timeLeft === 0) {
//         submitAnswer(); // Auto-submit
//       }
//     }, 1000);
//   }
  
//   function submitAnswer() {
//     clearInterval(timer);
  
//     const selected = document.querySelector('input[name="option"]:checked');
  
//     if (!selected) {
//       alert("Please select an option before submitting!");
//       return;
//     }
  
//     if (selected.value === shuffledQuestions[currentQuestion].answer) {
//       score++;
//     }
  
//     // Show feedback
//     document.querySelectorAll('label').forEach(label => {
//       const input = label.querySelector('input');
//       if (input.value === shuffledQuestions[currentQuestion].answer) {
//         label.style.backgroundColor = 'green';
//         label.style.color = 'white';
//       } else if (input.checked && input.value !== shuffledQuestions[currentQuestion].answer) {
//         label.style.backgroundColor = 'red';
//         label.style.color = 'white';
//       }
//     });
  
//     setTimeout(() => {
//       currentQuestion++;
//       loadQuestion();
//     }, 1000);
//   }
  
//   function restartQuiz() {
//     shuffledQuestions = shuffle([...quizData]);
//     currentQuestion = 0;
//     score = 0;
//     document.getElementById("result").textContent = '';
//     document.getElementById("restartBtn").style.display = "none";
//     document.getElementById("quizContainer").style.display = "block";
//     document.getElementById("timer").style.display = "block";
//     loadQuestion();
//   }
  
//   // Start quiz on load
//   window.onload = () => {
//     restartQuiz();
//   };
  


const quizData = [
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"], answer: "Mars" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: "Vatican City" },
    { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: "Nile River" },
    { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "In what year did World War II end?", options: ["1941", "1945", "1950", "1939"], answer: "1945" },
    { question: "Which chemical element has the symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Oganesson"], answer: "Oxygen" },
    { question: "What is the capital city of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Kyoto"], answer: "Tokyo" },
    { question: "Who painted the 'Starry Night'?", options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"], answer: "Vincent van Gogh" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" }
  ];

  let shuffledQuestions = [];
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timer;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function loadQuestion() {
    clearInterval(timer);

    if (currentQuestion >= shuffledQuestions.length) {
      const totalQuestions = shuffledQuestions.length;
      const incorrect = totalQuestions - score;

      document.getElementById("quizContainer").style.display = "none";
      document.getElementById("timer").style.display = "none";
      document.getElementById("restartBtn").style.display = "inline-block";

      document.getElementById("result").innerHTML = `
        <h2>Quiz Completed!</h2>
        <h3>Your Score: ${score}/${totalQuestions}</h3>
        <p style="color: green;">✅ Correct Answers: ${score}</p>
        <p style="color: red;">❌ Incorrect Answers: ${incorrect}</p>
      `;
      return;
    }

    const current = shuffledQuestions[currentQuestion];
    document.getElementById("question").textContent = current.question;
    const optionsHtml = current.options.map(opt => `
      <label>
        <input type="radio" name="option" value="${opt}"> ${opt}
      </label>
    `).join('');
    document.getElementById("options").innerHTML = optionsHtml;

    timeLeft = 60;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft === 0) {
        submitAnswer();
      }
    }, 1000);
  }

  function submitAnswer() {
    clearInterval(timer);

    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
      alert("Please select an option before submitting!");
      return;
    }

    if (selected.value === shuffledQuestions[currentQuestion].answer) {
      score++;
    }

    document.querySelectorAll('label').forEach(label => {
      const input = label.querySelector('input');
      if (input.value === shuffledQuestions[currentQuestion].answer) {
        label.style.backgroundColor = 'green';
        label.style.color = 'white';
      } else if (input.checked && input.value !== shuffledQuestions[currentQuestion].answer) {
        label.style.backgroundColor = 'red';
        label.style.color = 'white';
      }
    });

    setTimeout(() => {
      currentQuestion++;
      loadQuestion();
    }, 1000);
  }

  function restartQuiz() {
    shuffledQuestions = shuffle([...quizData]);
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").textContent = '';
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("timer").style.display = "block";
    loadQuestion();
  }

  window.onload = () => {
    restartQuiz();
  };