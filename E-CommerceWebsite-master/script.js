document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (name && email && cardNumber && expiry && cvv) {
      document.getElementById("message").textContent = "Payment Successful!";
    } else {
      document.getElementById("message").textContent =
        "Please fill out all fields.";
    }
  });
