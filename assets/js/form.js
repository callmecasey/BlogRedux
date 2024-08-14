document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submit-button")
    .addEventListener("click", submitBlogEntry);

  function submitBlogEntry() {
    const usernameText = document.getElementById("Username").value.trim();
    const titleText = document.getElementById("Title").value.trim();
    const contentText = document.getElementById("Content").value.trim();

    if (!usernameText || !titleText || !contentText) {
      alert("Please fill out all fields.");
      return;
    }

    const blogEntry = {
      usernameText,
      titleText,
      contentText,
    };

    let entries = JSON.parse(localStorage.getItem("blogEntries")) || [];
    entries.unshift(blogEntry);
    localStorage.setItem("blogEntries", JSON.stringify(entries));

    alert("Blog entry submitted successfully!");
    document.getElementById("blogForm").reset(); // Reset the form fields
  }
});
