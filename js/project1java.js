 const totalFields = 5;

    function updateProgress() {
        let completedFields = 0;

        const firstname = document.getElementById("firstname");
        const genre = document.getElementById("genre");
        const email = document.getElementById("email");
        const age = document.getElementById("age");
        const comments = document.getElementById("comments");
        const progressBar = document.getElementById("progress-bar");

        if (!firstname || !genre || !email || !age || !comments || !progressBar) {
            console.error("One or more elements not found!");
            return;
        }

        if (firstname.value.trim() !== "") completedFields++;
        if (genre.value !== "notselected") completedFields++;
        if (email.value.trim() !== "") completedFields++;
        if (age.checked) completedFields++;
        if (comments.value.trim() !== "") completedFields++;

        const progressPercentage = Math.floor((completedFields / totalFields) * 100);

        progressBar.style.width = progressPercentage +  "%";
        progressBar.textContent = progressPercentage + "%";
    }

    document.getElementById("firstname").addEventListener("input", updateProgress);
    document.getElementById("genre").addEventListener("change", updateProgress);
    document.getElementById("email").addEventListener("input", updateProgress);
    document.getElementById("age").addEventListener("change", updateProgress);
    document.getElementById("comments").addEventListener("input", updateProgress);
