const card = document.getElementById("debitCard");
card.addEventListener("click", () => {
  card.classList.toggle("rotate");
});

function saveCardValue() {
  const cardDetails = {
    cardNumber: "1234 5678 9012 3456",
    cardholderName: "CARDHOLDER NAME",
    expiryDate: "01/25",
    cvv: "123"
  };
  localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
  alert("Card details saved!");
}

