let button = document.getElementById("humberger");
let men = document.getElementById("menu");
if(button.style.display == "inline-block" & window.onload){
     men.style.display = "none";   
}
if(window.innerWidth > "769px"){
    men.style.document = "flex";
}
button.addEventListener("click", dropmenu);
function dropmenu(){
    if(men.style.display == "flex"){
        men.style.display = "none";
    }else{
        men.style.display = "flex";
    }
};
// button.onclick = ()=>{
//     if(men.style.display == "none"){
//         men.style.display = "flex";
//     }else{
//         men.style.display = "none";
//     }
// };