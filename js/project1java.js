
const totalFields = 5;

function updateProgress() {
  let completedFields = 0;

  if (document.getElementById("firstname").value.trim() !== "") completedFields++;
  if (document.getElementById("genre").value !== "notselected") completedFields++;
  if (document.getElementById("email").value.trim() !== "") completedFields++;
  if (document.getElementById("age").checked) completedFields++;
  if (document.getElementById("comments").value.trim() !== "") completedFields++;

  const progressPercentage = Math.floor((completedFields / totalFields) * 100);

  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = progressPercentage + "%";
  progressBar.textContent = progressPercentage + "%";
}