window.onscroll = function () {
    myFunction();
}


let bottomNavbar = document.getElementById("bottom-navbar-container");
let bottomNavbarTopPosition = bottomNavbar.offsetTop;

let contentContainer = document.getElementById("content-container");

function myFunction() {
    if (window.pageYOffset >= bottomNavbarTopPosition) {
        console.log("truur")
        contentContainer.classList.add("content");
        bottomNavbar.classList.add("sticky");
    }
    else {
        bottomNavbar.classList.remove("sticky");
        contentContainer.classList.remove("content");
    }
};


// sliderController.onclick = function(){
//     sliderFunction();
// }


// below code is for slider functionality
let slider = document.getElementById("slider");
slider.oninput = function () {
    myFunction2();
}
let fore = document.getElementById("fore")
function myFunction2() {
    fore.style.width = `${slider.value}%`
    console.log("kya hora");
    console.log(slider.value);
};