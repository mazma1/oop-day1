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