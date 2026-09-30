// UI 

const minnum = document.querySelector('.minnumber'),
      maxnum = document.querySelector('.maxnumber'),
      getgameform = document.getElementById('gameform'),
      getinput = document.querySelector('#guessnumber'),
      getbtn = document.querySelector('#btn'),
      message1 = document.querySelector('.message1'),
      message2 = document.querySelector('.message2');


      const min = 1,
            max = 10,
            winningnum = randomnum(min,max);

        let gameleft = 3;

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click',function(e){
    
    // console.log("i am working");
    // console.log(getinput.value);
    // console.log(typeof getinput.value); // string

    // let guess = Number(getinput.value);
    // let guess = +getinput.value;
    let guess = parseInt(getinput.value);
    // console.log(guess);
    // console.log(typeof guess); // number

    if(guess < min || guess > max || isNaN(guess)){
        // message2.textContent = `Please enter a number between ${min} to ${max}`;

        setmessage2(`Please enter a number between ${min} to ${max}`,"red");
    }

    if(guess === winningnum){
        // Gameover Win 
        // console.log("You Won");

        // disabled getinput 
        // getinput.disabled = true; 

        // getinput border color to green  
        // getinput.computedStyleMap.borderColor = "green";

        // message alert  
        // gameover , color color 

        // message1.textContent = ` ${winningnum} is correct .Congratulations`;
        // message1.style.color = "green";

        // setmessage1(` ${winningnum} is correct .Congratulations`,"green");

        // play again 
        // getbtn.value = "Play Again"

        gameover(true,`${winningnum} is correct .Congratulations`);

    }else{
        // Gameover Lose

        // gameleft--;
        gameleft -= 1;// 2 1 0 

        console.log(gameleft);

        if(gameleft === 0){
            // Gameover Lose

            // disabled getinput 
            // getinput.disabled = true; 

            // getinput border color to red  
            // getinput.computedStyleMap.borderColor = "red";

            // message 1 alert 
                // gameover , red color 
                // message1.textContent = `Game Over, You Lost , The correct number is ${winningnum}`;
                // message1.style.color = "red";
                // setmessage1(`Game Over, You Lost , The correct number is ${winningnum}`,"red");
            // play again 
            // getbtn.value = "Play Again"

            gameover(false,`Game Over, You Lost , The correct number is ${winningnum}`)
        }else{
            // Continue Game 

            // getinput border color to red 
            getinput.style.borderColor = "red" ;

            // message 1 alert 
                // no correct , left
                // message1.textContent = `${guess} is not Correct , ${gameleft} guess left`;
                // message1.style.color = "blue";

                setmessage1(`${guess} is not Correct , ${gameleft} guess left`,"blue");
            
            // clear getinput old value
            getinput.value = "";

            // getniput auto focus
            getinput.focus();


        }
    }

    e.preventDefault();
});

function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}

function setmessage2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.textContent = "";
    },2000)
}


function gameover(won,msg){

    let color = won === true ? "green" : "red";

    // let color;
    // won === true ? color="green" : color="red";


    // disable getinput 
    getinput.disabled = true;

    // getinput border color to green 
    getinput.style.borderColor = color;

    // message1 alert  
    // gameover  , color 
    setmessage1(msg,color);

    // play again 
    getbtn.value = "Play Again";

    // add Class 
    // getbtn.className = "btn reload";
    // getbtn.className += " reload";

    getbtn.classList.add("reload");

}

getgameform.addEventListener('mousedown',function(e){

    if(e.target.classList.contains("reload")){
        window.location.reload();
    }

});

function randomnum(min,max){
    let getrdm = Math.round(Math.random()*(max-min)+1);
    return getrdm;
}

console.log(winningnum);