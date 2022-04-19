// variables to access our character and Block
character = document.getElementById("character");
block = document.getElementById("block");
const score = document.getElementById('score');

var yourName = prompt("Enter your name:");
alert("Hello " + yourName + " Let's begin the game!");

function jump(){
  if(character.classList != "animate"){
    character.classList.add("animate");
  }

  setTimeout(function(){
    character.classList.remove("animate");
  },500);
}

var checkdead  =setInterval(function(){

    score.innerText++;

  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    block.style.animation = "none";
    block.style.display = "none";

    alert("YOUR SCORE IS: "+ score.innerText +"🤩! \n\nWanna Play again?");
    location.reload();

  }

},20);
