//Javascript bit
const btns = document.querySelectorAll('button[id^=b]')
const reBtn = document.querySelectorAll('button[id^=r]')
const myBtn = document.getElementById("myBtn");
var sound = new Audio('PieceSound.mp3');
var p1Pos = [];
var cpuPos = [];
var gameEnd= false;


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
        
        winningPos.forEach((winCon) =>
        {
            if(winCon.every(i=> p1Pos.includes(i)))
            {
                document.getElementById('gameResult').innerHTML = "You won!";
                console.log('win');
                gameEnd= true;
                this.endGame();
            }
            else if(winCon.every(i=>cpuPos.includes(i)))
            {
                document.getElementById('gameResult').innerHTML = "You lose...";
                console.log('lose');
                gameEnd= true;
                this.endGame();
            }
            else if(p1Pos.length + cpuPos.length == 9) //Bug where if 9th piece is winning piece, stale mate still occurs
            {
                console.log('stalemate');
                document.getElementById('gameResult').innerHTML = "Stalemate";
                gameEnd= true;
                this.endGame();
            }
            else;
        });
    },
    
    cpuTurn()
    {
            
        if(!gameEnd)
        {
        var randomNum = Math.floor(Math.random() * 9)+1;

        while(cpuPos.includes(randomNum) || p1Pos.includes(randomNum))
        {
            randomNum = Math.floor(Math.random() * 9)+ 1;
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
            
            gameEnd= false;
            p1Pos = [];
            cpuPos = []; //Clear both player positions
            document.getElementById('gameResult').innerHTML = "";
        });

    });