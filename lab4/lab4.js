function runQuiz() {
  const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "What language is primarily used for web styling?", answer: "css" },
  { question: "Who wrote the Harry Potter book series?", answer: "jk rowling" }
];

  let score = 0; 

  alert("Welcome to the Quiz! Let's begin.");

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);
  
    
    if (userAnswer === null) {
      alert("You exited the quiz.");
      break;
    }


    userAnswer = userAnswer.toLowerCase().trim();

    
    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  
  alert("Quiz complete! Your final score is: " + score + " out of " + quizQuestions.length);
}


runQuiz();


