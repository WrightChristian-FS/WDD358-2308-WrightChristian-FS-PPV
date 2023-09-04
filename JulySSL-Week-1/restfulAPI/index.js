const express = require('express'); 
const app = express(); 

const quizessCtrl = require("./src/controllers/quizzes");
const questionsCtrl = require("./src/controllers/questions");
const choicesCtrl = require("./src/controllers/choices");

app.use("/quizzes", quizessCtrl)
app.use("/questions", questionsCtrl)
app.use("/choices", choicesCtrl)


app.listen(3000);