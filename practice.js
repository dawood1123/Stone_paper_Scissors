let user_score= 0; 
let comp_score= 0; 

const choices = document.querySelectorAll(".choice");
const msg1 = document.querySelector("#msg")
const score_user = document.querySelector("#user_score");
const score_comp = document.querySelector("#comp_score");

const generate_compChoice = () =>{ 
    const options = ["rock", "paper", "scissors"]; 
    const randid = Math.floor(Math.random() * 3 ); 
    return options[randid];
}

const drawGame = () => { 
    //console.log("game was draw");
    msg1.innerText = "game was draw";
    msg1.style.backgroundColor = '#081b31'
}

const winner = (user_win, userChoice, machine_choice) => { 
    if (user_win) {
        user_score++;
        score_user.innerText = user_score;
        msg1.innerText = `you win!! your ${userChoice} beats ${machine_choice}`
        msg1.style.backgroundColor = 'green'
        
    } else {
        comp_score++;
        score_comp.innerText = comp_score;
        msg1.innerText = `you win!! ${machine_choice} beats your ${userChoice}`
        msg1.style.backgroundColor = 'red'
    }
}

const play_game = (userChoice) => { 
    //console.log("user: ", userChoice);
    const machine_choice = generate_compChoice();
    //console.log("comp",machine_choice);
    
    if (userChoice == machine_choice){ 
        drawGame();
    }
    else{ 
        let user_win = true; 
        if (userChoice === "rock"){ 
            user_win = machine_choice === "paper" ? false: true 
        }
        else if (userChoice === "paper"){ 
            user_win = machine_choice === "scissors" ? false: true
        }else { 
            user_win = machine_choice === "rock" ? false: true
        }
        winner(user_win, userChoice, machine_choice);
    }
    
}

choices.forEach((choice) => { 
    choice.addEventListener("click", () => { 
        const userChoice = choice.getAttribute("id")
        play_game(userChoice);
    })
})