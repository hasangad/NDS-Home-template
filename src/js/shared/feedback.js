// Select elements
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const feedbackForm = document.getElementById("feedbackForm");
const goodFeedback = document.getElementById("goodFeedback");
const badFeedback = document.getElementById("badFeedback");
const cancelButton = document.getElementById("cancelButton");

const otherGood = document.getElementById("otherGood");
const goodOtherText = document.getElementById("goodOtherText");

const otherBad = document.getElementById("otherBad");
const badOtherText = document.getElementById("badOtherText");

// Event handlers
yesButton.addEventListener("click", () => {
  feedbackForm.classList.remove("d-none");
  goodFeedback.classList.remove("d-none");
  badFeedback.classList.add("d-none");
});

noButton.addEventListener("click", () => {
  feedbackForm.classList.remove("d-none");
  badFeedback.classList.remove("d-none");
  goodFeedback.classList.add("d-none");
});

cancelButton.addEventListener("click", () => {
  feedbackForm.classList.add("d-none");
});

// Toggle "Add Other" textarea for Good Feedback
otherGood.addEventListener("change", () => {
  if (otherGood.checked) {
    goodOtherText.classList.remove("d-none");
  }
});

otherGood.addEventListener("blur", () => {
  goodOtherText.classList.add("d-none");
});

// Toggle "Add Other" textarea for Bad Feedback
otherBad.addEventListener("change", () => {
  if (otherBad.checked) {
    badOtherText.classList.remove("d-none");
  }
});

otherBad.addEventListener("blur", () => {
  badOtherText.classList.add("d-none");
});
// Form submission
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your feedback!");
  feedbackForm.classList.add("d-none");
});
