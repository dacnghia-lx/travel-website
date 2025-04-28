document.querySelectorAll('.toggle-buttons').forEach(group => {
  group.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('toggle-btn')) {
      const isSingleSelect = group.dataset.single === 'true';

      if (isSingleSelect) {
        group.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
      }
    }
  });
});

//Xóa lớp active khỏi tất cả các toggle buttons
const resetFilterBtn = document.getElementById('resetFilterBtn');
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', function() {
      const toggleButtons = document.querySelectorAll('#filterForm .toggle-btn');
      toggleButtons.forEach(btn => {
        btn.classList.remove('active');
      });
    });
  }


document.getElementById('filterForm').addEventListener('submit', function(e) {
  e.preventDefault(); // ngăn tải lại trang
  const form = e.target;
  const selects = form.querySelectorAll('.sel');
  const departure = selects[0] ? selects[0].value : '';
  const destination = selects[1] ? selects[1].value : '';

  // Lấy giá trị ngân sách
  const budgetBtn = form.querySelector('.toggle-buttons[data-group="budget"] .toggle-btn.active');
  const budget = budgetBtn ? budgetBtn.dataset.value : '';
  // Lấy giá trị dòng tour
  const typeBtn = form.querySelector('.toggle-buttons[data-group="type"] .toggle-btn.active');
  const type = typeBtn ? typeBtn.dataset.value : '';

  document.querySelectorAll('.tour-card').forEach(card => {
    let show = true;
    if (budget && card.dataset.budget !== budget) show = false;
    if (type && card.dataset.type !== type) show = false;
    if (departure !== 'Tất cả' && card.dataset.departure !== departure) show = false;
    if (destination !== 'Tất cả' && card.dataset.destination !== destination) show = false;
    card.style.display = show ? '' : 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const initTourCount = 3;
  const loadMoreCount = 3;
  const tourCards = document.querySelectorAll('.tour-card');
  
  // Ẩn các tour vượt quá số lượng ban đầu
  for (let i = initTourCount; i < tourCards.length; i++) {
    tourCards[i].style.display = 'none';
  }
  
  // Tạo nút
  const loadMoreButton = document.createElement('button');
  loadMoreButton.id = 'load-more-btn';
  loadMoreButton.textContent = 'Xem thêm';
  loadMoreButton.classList.add('load-more-button');
  
  // Thêm nút vào cuối danh sách tour
  document.querySelector('.tour-list').appendChild(loadMoreButton);
  
  loadMoreButton.addEventListener('click', function() {
    let visibleCount = 0;
    let hiddenTours = [];
    
    // Đếm số tour đang hiển thị và lưu các tour đang ẩn
    tourCards.forEach(card => {
      if (card.style.display !== 'none') {
        visibleCount++;
      } else {
        hiddenTours.push(card);
      }
    });
    
    // Hiển thị thêm tour
    for (let i = 0; i < loadMoreCount && i < hiddenTours.length; i++) {
      hiddenTours[i].style.display = 'flex';
    }
    
    // Ẩn nút "Xem thêm" nếu đã hiển thị tất cả tour
    if (hiddenTours.length <= loadMoreCount) {
      loadMoreButton.style.display = 'none';
    }
  });
  
  // Thêm logic cho bộ lọc để vẫn giữ nguyên chức năng "Xem thêm"
  const filterForm = document.getElementById('filterForm');
  if (filterForm) {
    filterForm.addEventListener('submit', function(e) {
      // Sau khi lọc, kiểm tra lại số lượng tour hiển thị
      // Nếu số lượng tour hiển thị vượt quá initTourCount, hiện lại nút "Xem thêm"
        let visibleTours = Array.from(tourCards).filter(card => card.style.display !== 'none');
        if (visibleTours.length > initTourCount) {
          // Ẩn các tour vượt quá initTourCount
          for (let i = initTourCount; i < visibleTours.length; i++) {
            visibleTours[i].style.display = 'none';
          }
          loadMoreButton.style.display = 'block';
        } else if (visibleTours.length <= initTourCount) {
          loadMoreButton.style.display = 'none';
        }
    });
  }
});
