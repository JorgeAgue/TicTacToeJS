//Javascript bit
const myBtn = document.getElementById("myBtn");
const p1Pos = [];
const cpuPos = [];
var gameEnd= false;


const obj = {
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
            }
            else if(winCon.every(i=>cpuPos.includes(i)))
            {
                document.getElementById('gameResult').innerHTML = "You lose...";
                gameEnd= true;
            }
            else if(p1Pos.length + cpuPos.length == 9) //Bug where if 9th piece is winning piece, stale mate still occurs
            {
                console.log('stalemate');
                document.getElementById('gameResult').innerHTML = "Stalemate";
                gameEnd= true;
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
        
        switch (randomNum)
        {
        case 1:
            b1.textContent = 'O';
            b1.disabled = true;
            break;
        case 2:
            b2.textContent = 'O';
            b2.disabled = true;
            break;
        case 3:
            b3.textContent = 'O';
            b3.disabled = true;
            break;
        case 4:
            b4.textContent = 'O';
            b4.disabled = true;
            break;
        case 5:
            b5.textContent = 'O';
            b5.disabled = true;
            break;
        case 6:
            b6.textContent = 'O';
            b6.disabled = true;
            break;
        case 7:
            b7.textContent = 'O';
            b7.disabled = true;
            break;
        case 8:
            b8.textContent = 'O';
            b8.disabled = true;
            break;
        case 9:
            b9.textContent = 'O';
            b9.disabled = true;
            break;
        }        

        obj.checkWinner()
    }
}
};

const btns = document.querySelectorAll('button[id^=b]')
btns.forEach(btn => {
   btn.addEventListener('click', event => {
    btn.textContent = 'X';
    btn.disabled = true;
    
    p1Pos.push(parseInt(event.target.id.slice(1)));
    obj.checkWinner();
    obj.cpuTurn();
   });
});