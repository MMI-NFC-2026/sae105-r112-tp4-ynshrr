// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon.addEventListener("click", (e) => {
  const summary = e.target.closest("summary");
  if (!summary) return;

  accordeon.querySelectorAll("details").forEach((det) => {
    if (det !== summary.parentElement) det.open = false;
  });
});
