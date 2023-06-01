let button = document.getElementById("humberger");
let men = document.getElementById("menu");
if(button.style.display == "inline-block" && window.onload){
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

document.querySelector("#dark").addEventListener("click", darkmode);

function darkmode(){
    if(document.querySelector("body").style.color == "white"){
        document.querySelector("body").style.color = "black";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#dark").style.color = "black";
        document.querySelector(".shadow").classList.add("lightmode");
        document.querySelector(".shadow").classList.remove("darkmode");

    }else{
        document.querySelector("body").style.color = "white";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("#dark").style.color = "white";
        document.querySelector(".shadow").classList.add("darkmode");
        document.querySelector(".shadow").classList.remove("lightmode");


    }
}
