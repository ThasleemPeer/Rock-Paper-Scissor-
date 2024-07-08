let user_score=0;
let computer_score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const user_score_para=document.querySelector("#your-score");
const computer_score_para=document.querySelector("#computer-score");


const gen_computer_choice=() =>{
    const options=["rock","paper","scissors"];
     const randidx=Math.floor(Math.random()*3);
     return options[randidx];
     
     
}
const draw_game= () =>{
    msg.innerText="Game was draw.Play again."
    msg.style.backgroundColor="orange";
}
const show_winner= (user_win,user_choice,computer_choice) => {
    if (user_win){
        msg.innerText=`You Win! Your ${user_choice} beats ${computer_choice}`;
        msg.style.backgroundColor="green";
        user_score++;
        user_score_para.innerText=user_score;
    }else{
        msg.innerText=`You Lose. ${computer_choice} beats Your ${user_choice} `;
        msg.style.backgroundColor="red";
        computer_score++;
        computer_score_para.innerText=computer_score;
    }
}

const playgame=(user_choice) => {
    const computer_choice=gen_computer_choice();
    if (user_choice == computer_choice){
        console.log(draw_game()); 
    }else {
        let user_win=true;
        if (user_choice=="rock"){
            //computer choice => paper,scissors
            user_win=computer_choice=="paper" ? false :true;
        }else if (user_choice=="paper"){
            //computer_choice => rock,scissors
            user_win=computer_choice=="scissors" ? false :true;
        }else {
            user_win=computer_choice=="rock" ?false :true;
        }
        show_winner(user_win,user_choice,computer_choice);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const user_choice=choice.getAttribute("id");
     playgame(user_choice);

    });
});