let navLinks = document.querySelector("header nav ul");
let videos = document.querySelector("#About #videoCarousel video");

document.querySelector("header nav .fa-bars").addEventListener("click", function () {
    navLinks.classList.toggle("navToggle");
})

document.querySelectorAll("#About #videoCarousel .flex i")[0].addEventListener("click", function () {
    videos.setAttribute("src", "Images/video1.mp4");
})

document.querySelectorAll("#About #videoCarousel .flex i")[1].addEventListener("click", function () {
    videos.setAttribute("src", "Images/video3.mp4");
})

document.querySelectorAll("#About #videoCarousel .flex i")[2].addEventListener("click", function () {
    videos.setAttribute("src", "Images/video3.mp4");
})