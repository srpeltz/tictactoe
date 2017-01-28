console.log("You're Connected!")


////// GLOBAL VARIABLES ////////
///////////////////////////////
var board = [
  [box1, box2, box3],
  [box4, box5, box6],
  [box7, box8, box9],
]
//make variables for  document.getElementById for each square so it can be called later in the code.//
var playerX = true
var imageX = 'http://www.iconsplace.com/download/black-letter-x-512.jpg'
var imageO = 'http://cdn3.volusion.com/joqnj.zjnrj/v/vspfiles/photos/REX00LB1O-2.jpg'

function altTurn() {
  if (playerX) {
    this.style.backgroundImage = 'url(' + imageX + ')';
    playerX=false
  }else {
    this.style.backgroundImage = 'url(' + imageO + ')';
    playerX=true
  }

  // playerX ? this.style.backgroundImage = 'url(' + imageX + ')' playerX=false :   this.style.backgroundImage = 'url(' + imageO + ')' playerX=true)
}

document.getElementById('box1').addEventListener('click', altTurn);
document.getElementById('box2').addEventListener('click', altTurn);
document.getElementById('box3').addEventListener('click', altTurn);
document.getElementById('box4').addEventListener('click', altTurn);
document.getElementById('box5').addEventListener('click', altTurn);
document.getElementById('box6').addEventListener('click', altTurn);
document.getElementById('box7').addEventListener('click', altTurn);
document.getElementById('box8').addEventListener('click', altTurn);
document.getElementById('box9').addEventListener('click', altTurn);

// var box2 = document.getElementById('box2')
// var box3 = document.getElementById('box3')
// var box4 = document.getElementById('box4')
// var box5 = document.getElementById('box5')
// var box6 = document.getElementById('box6')
// var box7 = document.getElementById('box7')
// var box8 = document.getElementById('box8')
// var box9 = document.getElementById('box9')



//////FUNCTIONS//////
////////////////////

//player 1 is chosen to select a square.


//player 1 clicks a square and that square is assigned a color
//player 2 is chosen to select a square
//player 2 clicks a square and that square is assigned a color

//if player one gets three in a row then he is the winner
//if player two gets three in a row then he is the winner

//if a cats game pop alert and automatically reset. (Copy code from dog lab)
