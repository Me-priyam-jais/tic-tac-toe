let returner=document.querySelector("#page");
let winstatement=document.querySelector("#winstate");
returner.addEventListener("click",()=>{
returner.classList.add("fade-out");
setTimeout(()=>{
winstatement.innerText=``;
returner.classList.remove("fade-in");
window.location.href="index.html";
},500);
});

document.addEventListener("DOMContentLoaded",()=>
{
let updatedtext=sessionStorage.getItem("");
if(updatedtext)
{
winstatement.innerHTML=updatedtext;
winstatement.classList.add("fade-in");
}
})
