/*==================== typing animation ====================*/
var typed =new Typed(".typing",{
    strings:["","Software Developer","web Developer", "Graphic Designer","Front-end Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*==================== Aside second v.. ====================*/

const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
mainContent = document.querySelector(".main-content");
navTogglerBtn.addEventListener("click",()=>
 {
     asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    mainContent.classList.toggle("full-width");
}