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
        const QUIZ_CREATED_DATE = newDate.toDateString();
        
        return ("Quiz Created On: " + QUIZ_CREATED_DATE);
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