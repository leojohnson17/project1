var totalFields = 5;

function updateProgress() {
    var completedFields = 0;

    var firstname = document.getElementById("firstname");
    var genre = document.getElementById("genre");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var comments = document.getElementById("comments");
    var progressBar = document.getElementById("progress-bar");

    if (!firstname || !genre || !email || !age || !comments || !progressBar) {
        console.error("One or more elements not found!");
        return;
    }

    if (firstname.value.trim() !== "") completedFields++;
    if (genre.value !== "notselected") completedFields++;
    if (email.value.trim() !== "") completedFields++;
    if (age.checked) completedFields++;
    if (comments.value.trim() !== "") completedFields++;

    var progressPercentage = Math.floor((completedFields / totalFields) * 100);

    progressBar.style.width = progressPercentage + "%";
    progressBar.textContent = progressPercentage + "%";
}

document.getElementById("firstname").addEventListener("input", updateProgress);
document.getElementById("genre").addEventListener("change", updateProgress);
document.getElementById("email").addEventListener("input", updateProgress);
document.getElementById("age").addEventListener("change", updateProgress);
document.getElementById("comments").addEventListener("input", updateProgress);
