document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".year-buttons button");
  const rows = document.querySelectorAll(".pub-table tbody tr");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      // active button styling
      buttons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const year = button.dataset.year;

      rows.forEach(row => {
        if (year === "all") {
          row.style.display = "";
        } else if (row.dataset.year === year) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });

    });
  });

});
