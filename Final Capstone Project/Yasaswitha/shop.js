const express = require("express");
const router = express.Router();
const path = require("path");

// router.get("/", (req, res, next) => {
//   res.send("Hi");
// });

// admin/app-product
// router.get("/app-product", (req, res, next) => {
//   console.log("Hello");
//   res.sendFile(path.resolve(__dirname, "../",'views','shop.html'));  
// });

// // admin/app-buy
// router.use("/app-process", (req, res) => {
//   res.send("Hi");
//   console.log("I am in another middleware");
// });
let Login=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    Login.classList.toggle('active');
    Menu.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
}
let Menu=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    Menu.classList.toggle('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}
window.onscroll=()=>{
    Menu.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    750: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

module.exports = router;