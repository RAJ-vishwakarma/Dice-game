document.getElementById("btn").onclick = choosePic;

var myPix = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png",];

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum]
    var randomNum2 = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture2").src = myPix[randomNum2]
    displayWinner(randomNum,randomNum2)
};

function displayWinner(randomNum,randomNum2){
    let result = document.getElementById('result')
    
    if (randomNum>randomNum2){
        result.innerHTML = "Player 1 won"
        console.log("Player 1 won")
    }

    else if (randomNum===randomNum2){
        result.innerHTML = "Draw"}

      else{
        result.innerHTML = "Player 2 won"
          console.log("Player 2 won")

      }

      }

    

     
