
function myFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
    
if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}

let button1 = document.querySelector("#accordion1").firstElementChild
button1.addEventListener("click",function(){
if(button1.classList.contains("fa-minus")){
    button1.classList.replace("fa-minus","fa-plus")
    button1.nextElementSibling.lastElementChild.classList.add("slt")      
}else{
    button1.classList.replace("fa-plus","fa-minus")
    button1.nextElementSibling.lastElementChild.classList.remove("slt")
}})

let button2 = document.querySelector("#accordion2").firstElementChild
button2.nextElementSibling.lastElementChild.classList.add("slt")    
button2.addEventListener("click",function(){
    if(button2.classList.contains("fa-minus")){
        button2.classList.replace("fa-minus","fa-plus")
        button2.nextElementSibling.lastElementChild.classList.add("slt")      
    }else{
        button2.classList.replace("fa-plus","fa-minus")
        button2.nextElementSibling.lastElementChild.classList.remove("slt")
}})

let button3 = document.querySelector("#accordion3").firstElementChild
button3.nextElementSibling.lastElementChild.classList.add("slt")    
button3.addEventListener("click",function(){
    if(button3.classList.contains("fa-minus")){
        button3.classList.replace("fa-minus","fa-plus")
        button3.nextElementSibling.lastElementChild.classList.add("slt")      
    }else{
        button3.classList.replace("fa-plus","fa-minus")
        button3.nextElementSibling.lastElementChild.classList.remove("slt")
}})


let _burger_menu = document.querySelector(".burger")
_burger_menu.addEventListener("click", function() {
    this.classList.toggle("active")

let _nav = this.previousElementSibling
    toggleDisplay(_nav)
})

let _filter_button = document.querySelectorAll(".filter_button")
_filter_button.forEach(element => element.addEventListener("click", function() {
    let _filter_button_active = document.querySelector(".filter_button.active")
    _filter_button_active.classList.toggle("active")
    this.classList.toggle("active")
    filterSelection(this.dataset.selection)
}))

let _toFilter = document.querySelectorAll(".toFilter")

_toFilter.forEach(element => element.addEventListener("mouseover", function(){
    let _figcaption = element.lastElementChild
    _figcaption.classList.toggle("active")
    setTimeout(function() {
        _figcaption.classList.toggle("active")
    }, 1000)
}))

function filterSelection(dataType) {
    _toFilter.forEach(element => {
        if (dataType == "all" || element.dataset.type == dataType) {
            element.classList.remove("hide")
        } else {
            element.classList.add("hide")
        }
    })
}

let _angle_up = document.querySelector("#angle_up")
let myTop = document.querySelector("body")
_angle_up.addEventListener("click", function() {
    myTop.scrollIntoView({behavior: "smooth", block: "start"})
})

function toggleDisplay(element) {
    if (element.style.display === "flex") {
        element.style.display = "none"
    } else {
        element.style.display = "flex"
    }
}
    
