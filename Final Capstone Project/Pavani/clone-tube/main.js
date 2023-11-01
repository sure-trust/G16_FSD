var menuIcon= document. querySelector(".menu-icon");
var sidebar= document. querySelector(".sidebar");
var container= document. querySelector(".container");

menuIcon.onclick= function(){     //whenevr we click on menu sidebar it will change
    sidebar.classList.toggle("small-sidebar");  
    container.classList.toggle("large-container") //the videos expand when menu bar is clicked and space got reduced
}