var tblinks = document.getElementsByClassName("tb-links");
var tbcontents = document.getElementsByClassName("tb-contents");

function opentb(tbname){
    for(tblink of tblinks){
        tblink.classList.remove("active-link")
    }
    for(tbcontent of tbcontents){
        tbcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link')
     // event.currentTarget.classList.add('active-tab')
document.getElementById(tbname).classList.add('active-tab')

}
var menu =document.getElementById("sidemenu");

function openmenu(){
    menu.style.right ="0";
}
function closemenu(){
    menu.style.right ="-200px";
}