let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let items = document.querySelectorAll('.item');

next.addEventListener('click', function () {
    document.querySelector('.slide').appendChild(items[0]);
    items = document.querySelectorAll('.item'); // cập nhật lại danh sách
});

prev.addEventListener('click', function () {
    document.querySelector('.slide').prepend(items[items.length - 1]);
    items = document.querySelectorAll('.item');
});
