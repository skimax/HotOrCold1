$(document).ready(function(){
var randomNumber;
var number = 0;
var newGame = function(){
location.reload();
}

$(".what").click(function(){
$(".overlay").show();
$(".close").click(function(){
$(".overlay").hide();

  
});
});



 function getNumber(){
   randomNumber = Math.floor(Math.random() * 100) + 1;
   console.log(randomNumber);
}

getNumber();


$(".new").on("click", newGame);






$("#guessButton").on("click", function(e){
  e.preventDefault();
  
  var  guess = parseInt ($("#userGuess").val(),10);
 if ($("#userGuess").val()==""){
     $("#feedback").html("Please Enter A Value");
     $("#userGuess").val("");
     $("#userGuess").autofocus;
     return;
}

   else if (isNaN(+guess)){
    $("#feedback").html("Please Enter A Number");
    $("#userGuess").val("");
    $("#userGuess").focus();
    return;
  }

 else if (guess >= 100){
     $("#feedback").html("Enter A Number Less Than 100");
     $("#userGuess").val("");
     return;
  }

 else if (guess <= 0){
    $("#feedback").html("Enter A Number between 0 to 100");
    $("#userGuess").val("");
    $("#userGuess").autofocus;
      return;
    }

  $("#guessList").prepend("<li>"+guess+"</li>");
          number++;
   $("#count").text(number);
  
  
  var difference = Math.abs(randomNumber-guess);
  
 
   if (randomNumber==guess) {
    $("#feedback").html("Congratulations !!! You got it! Click On NewGame To Start Again");
    $("#count").text("");
    $("#guessList").text("");

  }
   
   else if (difference >= 40) {
    $("#feedback").html("You're freezing!");
    $("#userGuess").val("");
  }
  
  else if (difference <= 39 && difference >= 30) {
    $("#feedback").html("You're cold!");
    $("#userGuess").val("");
  }
  
  else if (difference <= 29 && difference >= 20){
    $("#feedback").html("You're Warm!");
    $("#userGuess").val("");
  }
 
 else if (difference <= 19 && difference >= 1) {
    $("#feedback").html("You're hot!");
    $("#userGuess").val("");
  }
  
  
   
 
});

});

