// random value generated

 var y=Math.floor(Math.random()*10+1);
 var guess=1;
 
 function submit(){

 
 var x =document.getElementById("gameField").value;
 

 if(x==y){
    alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN"+guess+"Guess");
    guess=1;
 }
 else if(x>y){
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");

 }
 else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");

 }
}
 function playAgain(){
    y=Math.floor(Math.random()*10+1);
 }
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
