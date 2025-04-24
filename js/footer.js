function footeremail() {
    const emailInput = document.getElementById('email-input');
    const submitButton = document.getElementById('submit-button');
    const message = document.getElementById('message');

    if (submitButton && emailInput && message) {
        submitButton.onclick = function(e) {
            e.preventDefault();
            if (emailInput.value.trim()) {
                message.textContent = 'Cảm ơn bạn đã đăng ký nhận bản tin!';
                message.style.color = 'green';
                emailInput.value = '';
            } else {
                message.textContent = 'Vui lòng nhập địa chỉ email của bạn.';
                message.style.color = 'red';
            }
        };
    }
}

footeremail();