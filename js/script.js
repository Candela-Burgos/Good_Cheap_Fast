const queryId = (id) => document.getElementById(`${id}`);
const toggles = document.querySelectorAll(".toggle");

const clickOptions = (clicked) => {
  if (
    queryId("good").checked &&
    queryId("cheap").checked &&
    queryId("fast").checked
  ) {
    if (queryId("good") === clicked) {
      queryId("fast").checked = false;
    }
    if (queryId("cheap") === clicked) {
      queryId("good").checked = false;
    }
    if (queryId("fast") === clicked) {
      queryId("cheap").checked = false;
    }
  }
};

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => clickOptions(e.target))
);
