console.log("You're Connected!")

////// GLOBAL VARIABLES ////////
///////////////////////////////
var board = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9']

var playerX = true

var imageX = 'http://www.iconsplace.com/download/black-letter-x-512.jpg'
var imageO = 'http://cdn3.volusion.com/joqnj.zjnrj/v/vspfiles/photos/REX00LB1O-2.jpg'

var box1 = document.getElementById('box1').addEventListener('click', altTurn)
var box2 = document.getElementById('box2').addEventListener('click', altTurn);
var box3 = document.getElementById('box3').addEventListener('click', altTurn);
var box4 = document.getElementById('box4').addEventListener('click', altTurn);
var box5 = document.getElementById('box5').addEventListener('click', altTurn);
var box6 = document.getElementById('box6').addEventListener('click', altTurn);
var box7 = document.getElementById('box7').addEventListener('click', altTurn);
var box8 = document.getElementById('box8').addEventListener('click', altTurn);
var box9 = document.getElementById('box9').addEventListener('click', altTurn);

//////FUNCTIONS//////
////////////////////
function altTurn(e) {
  if (playerX) {
    this.style.backgroundImage = 'url(' + imageX + ')';
    this.setAttribute('box-value', 1);
    e.target.removeEventListener(e.type, arguments.callee);
    playerX=false;
  }else {
    this.style.backgroundImage = 'url(' + imageO + ')';
    this.setAttribute('box-value', 2);
    e.target.removeEventListener(e.type, arguments.callee);
    playerX=true;
  }
}

function winner(){
  //nodeValue possible??
    if ((board[0].document.querySelector('[box-value]') === "1") && (board[1].document.querySelector('[box-value]') === "1") && (board[2].document.querySelector('[box-value]') === "1")) {
      alert('X FTW!')
    }
}

//if player one gets three in a row then he is the winner
//if player two gets three in a row then he is the winner

//if a cats game pop alert and automatically reset. (Copy code from dog lab)
