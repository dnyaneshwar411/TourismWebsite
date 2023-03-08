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


// animation delays
for (i = 0; i < document.querySelectorAll("header nav ul li").length; i++) {
    document.querySelectorAll("header nav ul li")[i].style.animationDelay = i * 0.3 + 's';
}

for (i = 0; i < document.querySelectorAll("#Destination #destCardList .card").length; i++) {
    document.querySelectorAll("#Destination #destCardList .card")[i].style.animationDelay = i * 0.3 + 's';
}

for (i = 0; i < document.querySelectorAll("#Services #servicesCardList .card").length; i++) {
    document.querySelectorAll("#Services #servicesCardList .card")[i].style.animationDelay = i * 0.3 + 's';
}
