let your_score=0;
let computer_score=0;
const choices=document.querySelectorAll(".choice");


choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const user_choice=choice.getAttribute("id");
     console.log("choice was clicked",user_choice);

    });
});