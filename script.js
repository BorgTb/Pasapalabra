// Definir las preguntas y respuestas del juego
const questions = [
    { letter: 'A', answer: 'Amor', question: 'Con la "A". Sentimiento hacia otra persona.' },
    { letter: 'B', answer: 'Barcelona', question: 'Con la "B". Ciudad española conocida por su arquitectura.' },
    // Agrega más preguntas aquí
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = questions[currentQuestionIndex].question;
  }
  
  function checkAnswer() {
    const answerElement = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const userAnswer = answerElement.value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      resultElement.innerText = '¡Respuesta correcta!';
    } else if (userAnswer === 'pasapalabra') {
      resultElement.innerText = '¡Pasapalabra!';
    } else {
      resultElement.innerText = `Respuesta incorrecta. La respuesta correcta era: ${correctAnswer}`;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      answerElement.disabled = true;
      document.getElementById('submit-btn').disabled = true;
    }
  
    answerElement.value = '';
  }
  
  displayQuestion();
  