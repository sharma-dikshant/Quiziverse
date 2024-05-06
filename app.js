// // app.js
import getQuestions from "./question.js";

const science = getQuestions("science");
const history = getQuestions("history");
const geography = getQuestions("geography");
const technology = getQuestions("technology");
const food = getQuestions("food");
const environment = getQuestions("environment");
const general = getQuestions("general");

let score = 0;
let quizCount = 0;
const resultSection = document.querySelector(`.result-section`);
const mainContainer = document.querySelector(".main-container");
const quizSection = document.querySelector(".quiz-section");
const nextbtn = document.querySelector(".controls button");

{
  document.querySelector(".home").addEventListener("click", () => {
    const home = document.querySelector(".main-container");

    resultSection.classList.add("hide");
    home.classList.remove("hide");
    quizCount = 0;
    score = 0;
  });
}

// function CreateStartButton(classname) {
//   const button = document.querySelector(`${classname}`);
//   button.addEventListener("click", (evt) => {
//     switch (evt.target.getAttribute("data-topic")) {
//       case "science":
//         StartScienceQuiz();
//         break;
//       default:
//         console.log("another quiz is played");
//         break;
//     }
//   });
// }

const startbuttons = Array.from(
  document.querySelectorAll(".quiz-start-button")
);
console.log(startbuttons);

startbuttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    // console.log(evt.target.value);
    switch (evt.target.value) {
      case "science":
        StartQuiz(science);
        break;
      case "history":
        StartQuiz(history);
        break;
      case "geography":
        StartQuiz(geography);
        break;
      case "technology":
        StartQuiz(technology);
        break;
      case "food":
        StartQuiz(food);
        break;
      case "environment":
        StartQuiz(environment);
        break;
      case "general":
        StartQuiz(general);
        break;
      default:
        console.log("another quiz is played");
        break;
    }
  });
});

// document.querySelector(".main-container").style.display = "none";

function StartQuiz(topic) {
  console.log("starting Science Quiz", topic);

  mainContainer.classList.add("hide");
  quizSection.classList.remove("hide");

  //!------important variables

  ShowQuestion(topic, quizCount);
  nextbtn.addEventListener("click", () => {
    console.log(quizCount);
    let selectedOption = document.querySelector(".option-button.selected");

    if (!selectedOption) {
      alert("please select an option");
      return;
    }
    const selectedValue = selectedOption.value;

    checkAnswer(topic, selectedValue, quizCount);

    // NextQuestion(topic);
  });
}

function ShowQuestion(topic, index = 0) {
  // console.log(topic[index].question);
  document.querySelector(".question-section h3").textContent =
    topic[index].question;
  const options = Array.from(document.querySelectorAll(".option-button"));
  // console.log(options);

  // deselecting previously selected option;

  options.forEach((option) => {
    option.classList.remove("selected");
  });

  options.forEach((option, count) => {
    option.innerHTML = `<h4>${topic[index].options[count + 1]}</h4>`;
    // option.value = `${topic[index].options[count + 1]}`;
  });

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");
    });
  });
}

function NextQuestion(topic) {
  if (quizCount < 9) {
    quizCount++;
    ShowQuestion(topic, quizCount);
  } else {
    ShowResult();
  }
}

function checkAnswer(topic, selected = "not get any input", index) {
  const correctOption = document.querySelector(`.option-button[value="${topic[index].correct}"]`);
  const selectedOption = document.querySelector(`.option-button[value="${selected}"]`);

  if (topic[index].correct == selected) {
    score++;
    console.log("matched");
    selectedOption.style.backgroundColor = 'green';
    setTimeout(() => {
      selectedOption.style.backgroundColor = 'initial';
      NextQuestion(topic);
    }, 2000);
  } else {
    console.log("selected option is :", selected);
    console.log("current score :", score);
    selectedOption.style.backgroundColor = 'red';
    correctOption.style.backgroundColor = 'green';
    
    setTimeout(() => {
      selectedOption.style.backgroundColor = 'initial';
      correctOption.style.backgroundColor = 'initial';
      NextQuestion(topic);
    }, 2000);
  }
}

function ShowResult() {
  quizSection.classList.add("hide");
  resultSection.classList.remove("hide");
  document.querySelector(".score").textContent = `${score}/${quizCount + 1}`;
  console.log("printing Result");
}
