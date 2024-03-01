let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO =true  ;//Player1 and Player
let count = 0;

const winPattern =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

};
 

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
         else{
            box.innerText = "X"
            turnO = true;
         }

      box.disabled = true;

      count++;

      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
       }
   });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

function showWinner(winner) {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
     disabledBoxes();
} ; 



const checkWinner = () =>{

    for(let pattern of winPattern){
        let posValue1 = boxes[pattern[0]].innerText;
        let posValue2 = boxes[pattern[1]].innerText;
        let posValue3 = boxes[pattern[2]].innerText;

        if(posValue1 != "" && posValue2 != "" && posValue3 != ""){
            if(posValue1 === posValue2 && posValue2 === posValue3){
                showWinner(posValue1);
            }
        }
    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);