let buttons=document.querySelectorAll(".boxes");
let player1=prompt("Enter Your Name player 1");
let player2;
let turn1=prompt("What Sign You Want To Take [(X/x)or(o/O)");
let turn2;
const declare1=()=>
{
const declaration1=`<span style="color:green;">${player1} </span> Won This Round Better luck Next Time <span style="color:red;">${player2} </span>`;
sessionStorage.setItem("",declaration1);
}
const declare2=()=>
{
const declaration2=`<span style="color:green;">${player2} </span> Won This Round Better luck Next Time <span style="color:red;">${player1}</span>`;
sessionStorage.setItem("",declaration2);
}
if(turn1==="X"||turn1==="x")
{
turn1="X";
turn2="O";
player2=prompt("Enter Your Name Player 2");
}
else if(turn1==="O"||turn1==="o")
{
turn2="X";
turn1="O";
player2=prompt("Enter Your Name Player 2");
}
else
{
alert("Please Input a Valid Choice");
document.location="index.html";
}
const reload=()=>{
  window.location.href="index.html";
  for(let button of buttons)
    {
      button.innerText="";
    }
  }
let turn=turn1;
let reset=document.querySelector("#reset");
let winpattern=[[0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,4,6],
                [2,5,8],
                [3,4,5],
                [6,7,8]
               ];            
const checkwinner=()=>{
  for(let pattern of winpattern)
    {
      if(buttons[pattern[0]].innerText===buttons[pattern[1]].innerText&&buttons[pattern[1]].innerText===buttons[pattern[2]].innerText&&buttons[pattern[2]].innerText===turn1)
        {
          declare1();
          window.location.href="playerwin.html";
        }
      if(buttons[pattern[0]].innerText===buttons[pattern[1]].innerText&&buttons[pattern[1]].innerText===buttons[pattern[2]].innerText&&buttons[pattern[2]].innerText==="O")
        {
          declare2();
          window.location.href="playerwin.html";
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
  if(turn==="X")
    {
    boxes.innerText="X";
    turn="O";
    }
  else
    {
    boxes.innerText="O";
    turn="X";
    }
    reset.addEventListener("click",reload);
  checkwinner();
});
});