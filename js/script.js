let button = document.getElementById("humberger");
let men = document.getElementById("menu");

button.addEventListener("click", dropmenu);
function dropmenu(){
    if(men.style.display == "none"){
        men.style.display = "flex";
    }else{
        men.style.display = "none";
    }
};
// button.onclick = ()=>{
//     if(men.style.display == "none"){
//         men.style.display = "flex";
//     }else{
//         men.style.display = "none";
//     }
// };