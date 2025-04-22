let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Toggle the display of the "day-2-3" section and change button text
document.getElementById('read-more-btn').addEventListener('click', function () {
    const day2And3 = document.getElementById('day-2-3');
    const button = this;

    if (day2And3.style.display === 'none') {
        day2And3.style.display = 'block';
        button.textContent = 'Thu gọn';
    } else {
        day2And3.style.display = 'none';
        button.textContent = 'Xem thêm';
    }
});


