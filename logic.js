let buttons=document.querySelectorAll(".boxes");
let player="X";
let reset=document.querySelector("#reset");
let winstate=document.querySelector("#winningstatement");
let winpattern=[[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,4,6],
                [2,5,8],
                [3,4,5],
                [6,7,8]
               ];
const reload=()=>{
  winstate.innerText="";
  for(let button of buttons)
    {
      button.innerText="";
    }
                 }               
const checkwinner=()=>{
  for(let pattern of winpattern)
    {
      if(buttons[pattern[0]].innerText===buttons[pattern[1]].innerText&&buttons[pattern[1]].innerText===buttons[pattern[2]].innerText&&buttons[pattern[2]].innerText==="X")
        {
          winstate.innerText="CONGRATULATIONS..... PLAYER X WINS";
        }
      if(buttons[pattern[0]].innerText===buttons[pattern[1]].innerText&&buttons[pattern[1]].innerText===buttons[pattern[2]].innerText&&buttons[pattern[2]].innerText==="O")
        {
          winstate.innerText="CONGRATULATIONS..... PLAYER O WINS";
        }
   }
                      }
buttons.forEach((boxes)=>{
boxes.addEventListener("click",drawerpen=()=>{
  if(boxes.innerText==="X"||boxes.innerText==="O")
    {
      alert("dont spoil the game");
      return 0;
    }
  if(winstate.innerText==="CONGRATULATIONS..... PLAYER X WINS"||winstate.innerText==="CONGRATULATIONS..... PLAYER O WINS")
    {
    alert("please reset or start a new game");
    return 0;
    }
  if(player==="X")
    {
    boxes.innerText="X";
    player="O";
    }
  else
    {
    boxes.innerText="O";
    player="X";
    }
    reset.addEventListener("click",reload);
  checkwinner();
});
});
