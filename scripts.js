document.addEventListener('DOMContentLoaded', () => {
  // Publications Toggle Logic
  const toggleBtn = document.getElementById('toggle-pubs-btn');
  const pubsContent = document.getElementById('publications-content');

  if (toggleBtn && pubsContent) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = window.getComputedStyle(pubsContent).display === 'none';
      if (isHidden) {
        pubsContent.style.display = 'block';
        toggleBtn.textContent = 'Hide Publications';
      } else {
        pubsContent.style.display = 'none';
        toggleBtn.textContent = 'Show Publications';
      }
    });
  }

  // Year Filtering Logic
  const yearButtons = document.querySelectorAll('.year-buttons button');
  const tableRows = document.querySelectorAll('.pub-table tbody tr');

  yearButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      yearButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const selectedYear = button.getAttribute('data-year');

      tableRows.forEach(row => {
        const rowYear = row.getAttribute('data-year');
        if (selectedYear === 'all' || rowYear === selectedYear) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // Publication Details (Expand/Collapse on click)
  const pubMains = document.querySelectorAll('.pub-main');
  pubMains.forEach(main => {
    main.addEventListener('click', (e) => {
      // Don't toggle if a link was clicked
      if (e.target.tagName === 'A') return;

      const cell = main.closest('.pub-cell');
      const details = cell.querySelector('.pub-details');

      if (details.style.maxHeight && details.style.maxHeight !== '0px') {
        details.style.maxHeight = '0px';
      } else {
        details.style.maxHeight = '500px'; // Arbitrary large value
      }
    });
  });
});
