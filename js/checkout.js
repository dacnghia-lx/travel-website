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