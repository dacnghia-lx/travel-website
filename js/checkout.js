function fillCheckoutTourInfo() {
    const tourName = localStorage.getItem('tour_name');
    const tourCode = localStorage.getItem('tour_code');
    const date = localStorage.getItem('tour_departure_date');
    const guests = localStorage.getItem('tour_guests');
    const price = localStorage.getItem('tour_total_price');
    const image = localStorage.getItem('tour_image');

    if (tourName) document.getElementById('tour-name').textContent = tourName;
    if (tourCode) document.getElementById('tour-code').textContent = tourCode;
    if (date) document.getElementById('checkout-date').textContent = date;
    if (guests) document.getElementById('checkout-guests').textContent = guests;
    if (price) document.getElementById('checkout-price').textContent = price;
    if (image) document.getElementById('tour-image').src = image;
}

fillCheckoutTourInfo();

function showPaymentSection() {
    document.getElementById('payment-section').style.display = 'block';
    document.getElementById('payment-section').scrollIntoView({behavior: 'smooth'});
}

function handlePaymentMethodChange(value) {
    document.getElementById('card-form').style.display = (value === 'card') ? 'block' : 'none';
    document.getElementById('qr-image').style.display = (value === 'qr') ? 'block' : 'none';
}

function validateCardForm() {
    var number = document.getElementById('card-number').value.trim();
    var name = document.getElementById('card-name').value.trim();
    var expiry = document.getElementById('card-expiry').value.trim();
    var cvv = document.getElementById('card-cvv').value.trim();
    if (!number || !name || !expiry || !cvv) {
        alert('Vui lòng nhập đầy đủ thông tin thẻ!');
        return false;
    }
    var numberOk = /^\d{4} ?\d{4} ?\d{4} ?\d{4}$/.test(number);
    var expiryOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
    var cvvOk = /^\d{3,4}$/.test(cvv);
    if (!numberOk || !expiryOk || !cvvOk) {
        alert('Thông tin thẻ không hợp lệ!');
        return false;
    }
    return true;
}

function handlePay(selectedMethod) {
    if (!selectedMethod) {
        alert('Vui lòng chọn phương thức thanh toán!');
        return;
    }
    if (selectedMethod === 'card') {
        if (!validateCardForm()) return;
    }
    alert('Thanh toán thành công!');
    window.location.href = 'index.html';
}

function setupPaymentEvents() {
    var selectedMethod = null;
    var form = document.querySelector('.contact-info form');
    var radios = document.querySelectorAll('input[name="payment-method"]');
    var payBtn = document.getElementById('pay-btn');

    form.onsubmit = function(e) {
        e.preventDefault();
        showPaymentSection();
    };

    for (var i = 0; i < radios.length; i++) {
        radios[i].onchange = function() {
            selectedMethod = this.value;
            handlePaymentMethodChange(selectedMethod);
        };
    }

    payBtn.onclick = function() {
        handlePay(selectedMethod);
    };
}

// Gọi các function chính
fillCheckoutTourInfo();
setupPaymentEvents();