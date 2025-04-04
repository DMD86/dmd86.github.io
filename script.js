document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    console.log("Feedback submitted:", { name, email, message });

    document.getElementById("responseMsg").textContent = "Thank you for your feedback!";
    this.reset();
  } else {
    alert("Please fill all the fields!");
  }
});
