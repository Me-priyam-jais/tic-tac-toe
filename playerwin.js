let returner=document.querySelector("#page");
let winstatement=document.querySelector("#winstate");
returner.addEventListener("click",()=>{
window.location.href="index.html";
winstatement.innerText=""
});
document.addEventListener("DOMContentLoaded",(event)=>
{
let upadatedText=sessionStorage.getItem("");
if(upadatedText)
{
winstatement.innerHTML=upadatedText;
}
});