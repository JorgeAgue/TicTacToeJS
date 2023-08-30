//Javascript bit
const btns = document.querySelectorAll('button[id^=b]');
const reBtn = document.querySelectorAll('button[id^=r]');
const myBtn = document.getElementById("myBtn");
var sound = new Audio('PieceSound.mp3');
var p1Pos = [];
var cpuPos = [];
var gameEnd= false;

var winLine = document.getElementById("hWLine1");

const topLinePos = [];
topLinePos.push("115px", "235px", "355px", "225px", "225px", "225px", "235px", "235px");
const leftLinePos = [];
leftLinePos.push("5px","5px","5px","-125px","-3px","115px","5px","5px");
const lineOren = [];
lineOren.push("rotate(0deg)","rotate(0deg)","rotate(0deg)","rotate(90deg)","rotate(90deg)","rotate(90deg)","rotate(45deg)","rotate(-45deg)")

const lineColor = [];
lineColor.push("4px solid blue", "4px solid red");

const obj = 
{
    checkWinner()
    {
        //Winning Positions
        const winningPos = [];
        winningPos.push([1,2,3]); //Top Row
        winningPos.push([4,5,6]); //Mid Row
        winningPos.push([7,8,9]); //Bot Row
        winningPos.push([1,4,7]); //Left Col
        winningPos.push([2,5,8]); //Mid Col
        winningPos.push([3,6,9]); //Right Col
        winningPos.push([1,5,9]); //Cross1
        winningPos.push([3,5,7]); //Cross2
        
        var i =0; //Variable that keeps track of current winCon being checked
        
        winningPos.forEach((winCon) => //Looking through each win condition
        {
            if(winCon.every(i=> p1Pos.includes(i))) //If p1pos contains nums to current win condition
            {
                //Change where line appears based on what winCon was achieved
                winLine.style.transform = lineOren[i];
                winLine.style.left= leftLinePos[i];
                winLine.style.top= topLinePos[i];

                winLine.style.border = lineColor[0];
                winLine.style.visibility = "visible";

                document.getElementById('gameResult').innerHTML = "You won!";

                gameEnd= true;
                this.endGame();
            }
            else if(winCon.every(i=>cpuPos.includes(i)))
            {
                winLine.style.transform = lineOren[i];
                winLine.style.left= leftLinePos[i];
                winLine.style.top= topLinePos[i];

                winLine.style.border = lineColor[1];
                winLine.style.visibility = "visible";
                
                document.getElementById('gameResult').innerHTML = "You lose...";

                gameEnd= true;
                this.endGame();
            }
            i++; 

        });
        if(p1Pos.length + cpuPos.length == 9) //Fixed stalemate bug...
        {
            document.getElementById('gameResult').innerHTML = "Stalemate";
            gameEnd= true;
            this.endGame();
        }
    },
    
    cpuTurn()
    {
        if(!gameEnd)
        {
        var randomNum = Math.floor(Math.random() * 9)+1;

        while(cpuPos.includes(randomNum) || p1Pos.includes(randomNum)) //If random num has already been played
        {
            randomNum = Math.floor(Math.random() * 9)+ 1; //Roll random numbers until not
        }
        
        cpuPos.push(randomNum);
        sound.play();
        
        switch (randomNum)
        {
        case 1:
            b1.textContent = 'O';
            b1.disabled = true;
            b1.style.color='red';
            break;
        case 2:
            b2.textContent = 'O';
            b2.disabled = true;
            b2.style.color='red';
            break;
        case 3:
            b3.textContent = 'O';
            b3.disabled = true;
            b3.style.color='red';
            break;
        case 4:
            b4.textContent = 'O';
            b4.disabled = true;
            b4.style.color='red';
            break;
        case 5:
            b5.textContent = 'O';
            b5.disabled = true;
            b5.style.color='red';
            break;
        case 6:
            b6.textContent = 'O';
            b6.disabled = true;
            b6.style.color='red';
            break;
        case 7:
            b7.textContent = 'O';
            b7.disabled = true;
            b7.style.color='red';
            break;
        case 8:
            b8.textContent = 'O';
            b8.disabled = true;
            b8.style.color='red';
            break;
        case 9:
            b9.textContent = 'O';
            b9.disabled = true;
            b9.style.color='red';
            break;
        }        

        obj.checkWinner()
    }
    },
    
    endGame()
    {
        btns.forEach(btnG => 
            {
            btnG.disabled = true;
            }); //Disable all buttons after game is won
            p1Pos = []; //Prevent stalemate bug at turn 9
            cpuPos =[]; 
    }
}


//When Player clicks a game button
btns.forEach(btn => 
    {
   btn.addEventListener('click', event => 
   {
    btn.textContent = 'X';
    btn.disabled = true;
    btn.style.color='blue';
    sound.play();
    
    p1Pos.push(parseInt(event.target.id.slice(1)));
    obj.checkWinner();
    obj.cpuTurn();
   });
});

//When play clicks restart button
reBtn.forEach(btn => 
    {
        btn.addEventListener('click', event => 
        {
            console.log('Game reset');
            btns.forEach(btnG => 
                {
                btnG.textContent = '';
                btnG.disabled = false;
                }); //Renable game buttons and remove their symbol
                
            winLine.style.visibility = "hidden";
            gameEnd= false;
            
            p1Pos = [];
            cpuPos = []; //Clear both player positions
            
            document.getElementById('gameResult').innerHTML = "";
        });

    });