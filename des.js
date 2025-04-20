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