


// ES5

// console. log("send me your account number")
// alert( writeup)
// var writeup = " i am hungry"

// function dosomething() {
//               alert( writeup)
// }

// console.log(document)
// console.log(hamburgerdiv)



var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-links-holder ")
var mybackdrop = document.querySelector(".backdrop ")

function dosomething() {
              hamburgerdiv.classList.toggle("showburger")
              mobileLinks.classList.toggle("show-mobile-links-holder")
              mybackdrop.classList.toggle("show-backdrop")
}






