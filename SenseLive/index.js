window.onscroll = function(){
    myFunction();
}

let sliderController = document.getElementById("slider-control");
let bottomNavbar = document.getElementById("bottom-navbar-container");
let bottomNavbarTopPosition = bottomNavbar.offsetTop;

let contentContainer = document.getElementById("content-container");

function myFunction(){
    if(window.pageYOffset >= bottomNavbarTopPosition){
        console.log("truur")
        contentContainer.classList.add("content");
        bottomNavbar.classList.add("sticky");
    }
    else{
        bottomNavbar.classList.remove("sticky");
        contentContainer.classList.remove("content");
    }
};

let root = document.querySelector(":root");
// sliderController.onclick = function(){
//     sliderFunction();
// }
sliderController.onclick=function(){
    sliderFunction();
}

let image = document.getElementById("img-2");
function sliderFunction(){
    let sliderControllerValue = sliderController.value;
    let stringValuePercentage = `${sliderControllerValue}%`
    root.style.setProperty("--var-width",stringValuePercentage);
    image.width = stringValuePercentage;
    console.log(sliderControllerValue);
    console.log(image.width);
}