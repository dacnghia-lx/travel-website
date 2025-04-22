let slideIndex = 1;
// Khởi tạo eventlistener cho sk khi toàn bộ cấu trúc HTML tải xong
document.addEventListener('DOMContentLoaded', function() {
  showSlide(slideIndex);
});

// Hàm chuyển slide
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Hàm dùng dot chuyển đến slide thứ n
function currentSlide(n) {
  showSlide(slideIndex = n);
}


function showSlide(n) {
  const slides = document.getElementsByClassName("review-slide");
  const dots = document.getElementsByClassName("dot");
  
  // Xử lý trường hợp user di chuyển quá giới hạn của carousel
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Xoá class "active" và ẩn slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  // Thêm class "active" cho slide hiện tại
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active");
}

// Auto-advance slides every 4 seconds
setInterval(function() {
  changeSlide(1);
}, 4000);