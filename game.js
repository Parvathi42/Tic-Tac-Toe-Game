let boxes=document.querySelectorAll(".Box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((Box)=>{
    Box.addEventListener("click", ()=>{
        if(turnO){
            Box.innerText="O";
            turnO=false;
        }else{
            Box.innerText="X";
            turnO=true;
        }
        Box.disabled=true;

        checkWinner();
    });
});

const disableBoxes= () =>{
    for(let Box of boxes){
        Box.disabled=true;
    }
}

const enableBoxes= () =>{
    for(let Box of boxes){
        Box.disabled=false;
        Box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratualtions! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);