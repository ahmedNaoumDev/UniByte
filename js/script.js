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

let videoCont = document.querySelector(".videos");
let label1 = document.querySelector(".one");
let label2 = document.querySelector(".two");
let label3 = document.querySelector(".three");
let label4 = document.querySelector(".four");

label1.addEventListener("click", function(){
    slide(".one")
});
label2.addEventListener("click", function(){
    slide(".two")
});
label3.addEventListener("click", function(){
    slide(".three")
});
label4.addEventListener("click", function(){
    slide(".four")
});

let array = [label1,label2,label3,label4];

function slide(string){
    if(string === ".one"){
        videoCont.style.setProperty("margin-left", "0");
        for(let i = 0; i<4;i++){
            if(array[i]===  label1){
                array[i].style.listStyleType = "disc" ;
                array[i].lastElementChild.style.display = "block";
                array[i].style.backgroundColor = "grey";
            }else{
                array[i].style.listStyleType = "none";
                array[i].lastElementChild.style.display = "none";
                array[i].style.removeProperty("background-color");
            }
        }
    }
    else if(string === ".two"){
        videoCont.style.setProperty("margin-left", "-100%");
        for(let i = 0; i<4;i++){
            if(array[i]===  label2){
                array[i].style.listStyleType = "disc" ;
                array[i].lastElementChild.style.display = "block";
                array[i].style.backgroundColor = "grey";
            }else{
                array[i].style.listStyleType = "none";
                array[i].lastElementChild.style.display = "none";
                array[i].style.removeProperty("background-color");
            }
        }    }
    else if(string === ".three"){
        videoCont.style.setProperty("margin-left", "-200%");
        for(let i = 0; i<4;i++){
            if(array[i]===  label3){
                array[i].style.listStyleType = "disc" ;
                array[i].lastElementChild.style.display = "block";
                array[i].style.backgroundColor = "grey";
            }else{
                array[i].style.listStyleType = "none";
                array[i].lastElementChild.style.display = "none";
                array[i].style.removeProperty("background-color");
            }
        }    }
    else  if(string === ".four"){
        videoCont.style.setProperty("margin-left", "-300%");
        for(let i = 0; i<4;i++){
            if(array[i]===  label4){
                array[i].style.listStyleType = "disc" ;
                array[i].lastElementChild.style.display = "block";
                array[i].style.backgroundColor = "grey";
            }else{
                array[i].style.listStyleType = "none";
                array[i].lastElementChild.style.display = "none";
                array[i].style.removeProperty("background-color");
            }
        }    
    }
}