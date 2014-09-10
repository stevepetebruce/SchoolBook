var quiz = [{
  "question": "In what country was Anne Frank born?",
  "choices": ["France", "The Netherlands", "Germany", "England"],
  "correct": "Germany"
}, {
  "question": "When did World War II start?",
  "choices": ["1914", "1929", "1945", "1939"],
  "correct": "1939"
}, {
  "question": "When was Anne sent to Auschwitz concentraction camp (camp A)?",
  "choices": ["1944", "1939", "1945", "1930"],
  "correct": "1944"
}, {
  "question": "How many brothers and sisters did Anne have?",
  "choices": ["1 brother and 1 sister", "1 brother", "No brothers or sisters", "1 sister"],
  "correct": "1 sister"
}, {
  "question": "What did Anne want to be when she grew up?",
  "choices": ["A doctor", "An actor", "A journalist", "A solider"],
  "correct": "A journalist"
}, {
  "question": "Which family member survived the war?",
  "choices": ["Otto Frank", "Edith Frank", "Margot Frank", "Anne Frank"],
  "correct": "Otto Frank"
}, {
  "question": "How old was Anne at the start of the war?",
  "choices": ["10", "12", "7", "15"],
  "correct": "10"
}, {
  "question": "Where was Anne seperated from her parents?",
  "choices": ["In Amsterdamn", "In Auschwitz (Camp A)", "In Bergen-Belsen (Camp B)", "In Germany"],
  "correct": "In Auschwitz (Camp A)"
}, {
  "question": "In what year did World War II end?",
  "choices": ["1945", "1939", "1940", "1919"],
  "correct": "1945"
}, {
  "question": "What was Annes father called?",
  "choices": ["Arthur", "Oliver", "Wilhem", "Otto"],
  "correct": "Otto"
}];


// define elements
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");

// init vars
var currentQuestion = 0,
  score = 0,
  askingQuestion = true;

function $(id) { // shortcut for document.getElementById
  return document.getElementById(id);
}

function askQuestion() {
  var choices = quiz[currentQuestion].choices,
    choicesHtml = "";

  // loop through choices, and create radio buttons
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "' class='css-checkbox'>" +
      " <label class='css-label' for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  // load the question
  questionContainer.textContent = "Q" + (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;

  // setup for the first time
  if (currentQuestion === 0) {
    scoreContainer.textContent = "Score: 0 right answers out of " +
      quiz.length + ".";
    submitBtn.textContent = "Submit Answer";
  }
}

function checkAnswer() {
  // are we asking a question, or proceeding to next question?
  if (askingQuestion) {
    submitBtn.textContent = "Next Question";
    askingQuestion = false;

    // determine which radio button they clicked
    var userpick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { // if this radio button is checked
        userpick = radios[i].value;
      }

      // get index of correct answer
      if (radios[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }

    // setup if they got it right, or wrong
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "#C31414";
    }
    if(1 == score){
      scoreContainer.textContent = "Score: " + score + " right answer out of " + quiz.length + ".";
    }
    if(score > 1){
      scoreContainer.textContent = "Score: " + score + " right answers out of " + quiz.length + ".";
    }

    
  } else { // move to next question
    // setting up so user can ask a question
    askingQuestion = true;
    // change button text back to "Submit Answer"
    submitBtn.textContent = "Submit Answer";
    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}
function correctAnswersHTML(){
  html = "<p>";
  for(i = 0; i < quiz.length; i++){
    html += quiz[i].question + " - " + quiz[i].correct + "</br>";
  }
  html += "</p>";
  return html;
}

function showFinalResults() {
  content.innerHTML = "<h2>You've completed the quiz!</h2>" +
    "<h2>You got " + score + " out of " + quiz.length + "<h2>" +
    "The correct answers are: " + correctAnswersHTML() +
    "<a href=\"../book/quiz.html\" class=\"nextButton\">Try again</a>" +
    "<a href=\"../book/final_page.html\" class=\"nextButton\">Done</a>";
}



window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);
