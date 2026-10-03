$(document).ready(function(){

    // console.log("hi");

    // Theme Toggle for light mode and dark mode 

    $("#themetoggle").click(function(){
        $("body").toggleClass("dark-mode");
        localStorage.setItem("theme",$("body").hasClass("dark-mode") ? "dark" : "light");
    });

    // Load them from localStorage 

    if(localStorage.getItem("theme") === "dark"){
        $("body").addClass("dark-mode");
    }

});


// click()
// toggleClass()