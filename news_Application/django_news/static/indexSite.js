let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// function moveSlide(n) {
//     slideIndex += n;
//     let slides = document.getElementsByClassName("carousel-slide");
//     if (slideIndex > slides.length) {slideIndex = 1}
//     if (slideIndex < 1) {slideIndex = slides.length}
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
// }

function moveSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("carousel-slide");
    let descriptions = document.getElementsByClassName("slide-description");
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        descriptions[i].style.display = "none"; // Hide all descriptions
    }
    
    slides[slideIndex-1].style.display = "block"; // Display the current slide
    descriptions[slideIndex-1].style.display = "block"; // Display the description for the current slide
}


// function showSlides() {
//     let slides = document.getElementsByClassName("carousel-slide");
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
    
//     // Slide all slides to the left
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.left = "-100%";
//     }
    
//     // Move the current slide into view from the right
//     slides[slideIndex-1].style.left = "0";
    
//     setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

// function moveSlide(n) {
//     slideIndex += n;
//     let slides = document.getElementsByClassName("carousel-slide");
//     if (slideIndex > slides.length) {slideIndex = 1}
//     if (slideIndex < 1) {slideIndex = slides.length}
    
//     // Slide all slides to the left
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.left = "-100%";
//     }
    
//     // Move the current slide into view from the right
//     slides[slideIndex-1].style.left = "0";
// }
