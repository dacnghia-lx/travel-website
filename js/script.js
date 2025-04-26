
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

function bookingBoxHandler() {
    const pricePerGuest = parseInt(document.querySelector('.discounted-price').getAttribute('data-value'), 10);
    const guestsSelect = document.getElementById('guests');
    const totalPriceElement = document.getElementById('total-price');
    const bookBtn = document.getElementById('book');

    // Hàm cập nhật tổng tiền
    function updateTotalPrice() {
        const numberOfGuests = parseInt(guestsSelect.value, 10);
        const totalPrice = pricePerGuest * numberOfGuests;
        totalPriceElement.textContent = `${totalPrice.toLocaleString()} VND`;
    }

    if (guestsSelect && totalPriceElement) {
        guestsSelect.addEventListener('change', updateTotalPrice);
    }

    if (bookBtn) {
        bookBtn.addEventListener('click', function(e) {
            e.preventDefault();

            // Lấy dữ liệu từ form
            const ID = document.getElementById('tour-code').textContent;
            const tourName = document.getElementById('tour-name').textContent;
            const departureDate = document.getElementById('departure-date').value;
            const guests = guestsSelect.value;
            const totalPrice = totalPriceElement.textContent;

            // Lấy ảnh bìa (slide đầu tiên)
            const firstSlideImg = document.querySelector('.slideshow-container .slide img');
            const tourImage = firstSlideImg ? firstSlideImg.getAttribute('src') : './';

            // Lưu vào localStorage
            localStorage.setItem('tour_image', tourImage);
            localStorage.setItem('tour_code', ID);
            localStorage.setItem('tour_name', tourName);
            localStorage.setItem('tour_departure_date', departureDate);
            localStorage.setItem('tour_guests', guests);
            localStorage.setItem('tour_total_price', totalPrice);

            // Chuyển sang trang checkout
            window.location.href = '../../checkout.html';
        });
    }
}

bookingBoxHandler();

function handleAccordion() {
    // Lấy tất cả các nút accordion-header
    var headers = document.querySelectorAll('.accordion-header');
    // Lặp qua từng nút
    headers.forEach(function(button) {
        button.addEventListener('click', function() {
            // Lấy phần nội dung liền sau nút
            var content = button.nextElementSibling;
            // Đổi trạng thái active cho nút
            button.classList.toggle('active');
            // Nếu đang active thì hiện nội dung, không thì ẩn đi
            if (button.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
}

handleAccordion();


