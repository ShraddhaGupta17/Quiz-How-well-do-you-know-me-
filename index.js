var readlineSync = require('readline-sync');
var score=0;

function welcome(){
  var userName= readlineSync.question("What is your name? ");
  console.log("Welcome "+userName +"!");
  console.log("Do you know Shraddha?");
  console.log("------------------------");
  console.log("------------------------");
}

var questions = [{
  question:"What is my nickname? ",
  answer:"Nidhi"
},{
  question:"What is my birth date? ",
  answer:"7 Jan"
},{
  question:"Where do I live? ",
  answer:"Varanasi"
},{
  question:"What is my favourite color? ",
  answer:"Blue"
},{
  question:"Where do I work? ",
  answer:"TCS"
},{
  question:"Which is my all time favourite food? ",
  answer:"Momos"
},{
  question:"What makes me angry? ",
  answer:"Con call after office hours"
}];

var highscores =[{
  name: "Shraddha",
  score: 14,
},
{
  name: "Neelam",
  score: 8,
}];

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Correct.. Well done!");
    score=score+2;
  }
  else{
    console.log("OOPS! You are Wrong");
    score--;
  }
  console.log("Current Score is: "+ score);
  console.log("------------------------");
}

function game(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores(){
  if(score >=5){
    console.log("YAY! You SCORED: ", score);
  }
  else{
    console.log("OOPS! You SCORED: ", score);
  }
  console.log("------------------------");
  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highscores.map(score => console.log(score.name, " : ", score.score))
  
}

welcome();
game();
showScores();
