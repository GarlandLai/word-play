$(document).ready(function(){
  $("#wordPlay").submit(function(event){
    var userInput = $("#sentence").val();
    console.log(userInput);
    var newArray1 = userInput.split();
    console.log(newArray1);
    var newArray2 = [];

    newArray1.forEach(function(newArray){
      newArray2.push(word[3]); ???
    });

    event.preventDefault();
  });
});
