document.addEventListener("DOMContentLoaded", function() {

    var dropdownBtn = document.querySelector(".dropdown-menu .dropdownBtn");
    var dropdownMenu = document.querySelector(".dropdown-menu .menu-content");
    dropdownBtn.addEventListener("click", function() {
        dropdownMenu.classList.toggle("active");
        console.log("click")
        

    })


})