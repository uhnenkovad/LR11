$(document).ready(function () {
  let count = 0;
  let wrong = 0;
  let right = 0;
  let first = [
    {question: "soul", answer: "душа",},
    {question: "think", answer: "думати",},
    {question: "skill", answer: "навички",},
    {question: "lawyer", answer: "адвокат",},
    {question: "accurate", answer: "точний",},
    {question: "solve", answer: "вирішувати",},
    {question: "smile", answer: "посмішка",},
    {question: "fear", answer: "страх",},
    {question: "lazy", answer: "лінивий",},
    {question: "nearby", answer: "поблизу",},
  ]

  $(".count").html(`Question ${count}/10`);
  $(".right").html(`Right answers ${right}/10`);
  $(".wrong").html(`Wrong answers ${wrong}/10`);

  let random = Math.floor(Math.random() * first.length);
  $(".area").html(first[random].question);

 
  $(".but").click(()=>{

    count++;

    if(count > 9 ){
      setTimeout(() => {
        if(right < 3){
        alert("Learn more words and try again"+"\nRight answers: " + right + "\nWrong answers: " + wrong);
        window.location.reload(true);
      }else if(right > 3 && right < 7){
        alert("My congratulations! You have not bad result"+"\nRight answers: " + right + "\nWrong answers: " + wrong);
        window.location.reload(true);
      }else if(right > 6){
        alert("You are the best"+"\nRight answers: " + right + "\nWrong answers: " + wrong);
        window.location.reload(true);
      }
    }, 500);
    }
    $(".but").attr("disabled",true)
    setTimeout(() => {
      first.splice(random,1);
  }, 100); 
    $(".count").html(`Question ${count}/10`);
    let answer = $("input").val().toLowerCase().trim();
    if(answer == first[random].answer){
      right++;
      $(".right").html(`Right answers ${right}/10`);
      setTimeout(() => {
        reset();
      }, 500);
    }else{
      wrong++;
      $(".wrong").html(`Wrong answers ${wrong}/10`);
      setTimeout(() => {
        reset();
      }, 500);
    }
  });
 function reset(){
    $(".but").removeAttr("disabled");
    random = Math.floor(Math.random() * first.length);
    $(".area").html(first[random].question);
    $(".input").val("");
  }

});
