//variable that stores questions
let questions = document.getElementsByClassName("questions");

//function which allows the click to make the hidden answer appear or disappear depending on the question clicked
for (i = 0; i < questions.length; i++) {
    questions[i].onclick = function(){
      let answerHidden = this.nextElementSibling;
      if (answerHidden.style.display === "block") {
        answerHidden.style.display = "none";
      }

       else {
        answerHidden.style.display = "block";
       }
    };
}

