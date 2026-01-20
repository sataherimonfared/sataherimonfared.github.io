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

  // Conference Main Toggle
  const mainToggleBtn = document.getElementById('main-toggle-talks-btn');
  const conferenceContainer = document.getElementById('conference-timeline-container');

  if (mainToggleBtn && conferenceContainer) {
    mainToggleBtn.addEventListener('click', () => {
      const isHidden = window.getComputedStyle(conferenceContainer).display === 'none';
      if (isHidden) {
        conferenceContainer.style.display = 'block';
        mainToggleBtn.textContent = 'Hide Presentation';
      } else {
        conferenceContainer.style.display = 'none';
        mainToggleBtn.textContent = 'Show Presentation';
      }
    });
  }

  // Conference Secondary Toggle (Older Talks)
  const toggleTalksBtn = document.getElementById('toggle-talks-btn');
  const extraTalks = document.getElementById('extra-talks');

  if (toggleTalksBtn && extraTalks) {
    toggleTalksBtn.addEventListener('click', () => {
      const isHidden = window.getComputedStyle(extraTalks).display === 'none';
      if (isHidden) {
        extraTalks.style.display = 'block';
        toggleTalksBtn.textContent = 'Hide Older Talks';
      } else {
        extraTalks.style.display = 'none';
        toggleTalksBtn.textContent = 'Show More Talks';
      }
    });
  }

  // Awards Toggle Logic
  const toggleAwardsBtn = document.getElementById('toggle-awards-btn');
  const awardsContent = document.getElementById('awards-content');

  if (toggleAwardsBtn && awardsContent) {
    toggleAwardsBtn.addEventListener('click', () => {
      const isHidden = window.getComputedStyle(awardsContent).display === 'none';
      if (isHidden) {
        awardsContent.style.display = 'block';
        toggleAwardsBtn.textContent = 'Hide Awards';
      } else {
        awardsContent.style.display = 'none';
        toggleAwardsBtn.textContent = 'Show Awards';
      }
    });
  }

  // Supervision Toggle Logic
  const toggleSupervisionBtn = document.getElementById('toggle-supervision-btn');
  const supervisionContent = document.getElementById('supervision-content');

  if (toggleSupervisionBtn && supervisionContent) {
    toggleSupervisionBtn.addEventListener('click', () => {
      const isHidden = window.getComputedStyle(supervisionContent).display === 'none';
      if (isHidden) {
        supervisionContent.style.display = 'block';
        toggleSupervisionBtn.textContent = 'Hide Supervision';
      } else {
        supervisionContent.style.display = 'none';
        toggleSupervisionBtn.textContent = 'Show Supervision';
      }
    });
  }

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
