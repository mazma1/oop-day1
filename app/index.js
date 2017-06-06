'use strict'; 

// A QUIZ APP FOR STUDENTS
class Student {
  constructor (studentName, studentEmail) {
    this.name = studentName;
    this.email = studentEmail;
    this.quizScores = [];
  }
  
  saveScore(theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd);
  }
  
  showScores()  {
    let scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Available";
    return this.name + "'s scores: " + scores;
  }
}

// Super Parent Class
class Question {
    constructor (theQuestion, theOptions, theCorrectAnswer) {
        this.question = theQuestion;
        this.options = theOptions;
        this.correctAnswer = theCorrectAnswer;
        this.studentAnswer = "";
    }  
  
    getQuizDate () {
        let newDate = new Date();
        const quizCreatedDate = newDate.toDateString();
        
        return ("Quiz Created On: " + quizCreatedDate);
    }
  
    displayQuestion () {
        let choiceCounter = 1;
        console.log (this.question);

        this.options.forEach(function (eachOption)  {
            console.log(choiceCounter + ")" + eachOption);
            choiceCounter++;
            
        });
    }
}

// Sub Class
class MultiChoiceQuestion extends Question {
  constructor(theQuestion, theOptions, theCorrectAnswer) {
    super (theQuestion, theOptions, theCorrectAnswer);
  }
  
  getCorrectAnswer() {
    return  this.correctAnswer;
  }
  
  takeQuiz() {
    let question = this.displayQuestion();
    let studentAnswer = prompt(question);
    if (studentAnswer  == this.correctAnswer) {
      return "Correct Answer!";
    }
    else {
      return "Wrong answer, try harder next time."
    }
  }
} 