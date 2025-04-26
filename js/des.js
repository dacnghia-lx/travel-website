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

document.getElementById('filterForm').addEventListener('submit', function(e) {
  e.preventDefault();
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