const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const rate = document.querySelector("input[name='rating']:checked").value;
  
  const thanksContainer = document.querySelector(".thanks-container");
  const ratingContainer = document.querySelector(".rating-container");
  const res = document.getElementById("res");

  thanksContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
  res.innerText = `You selected ${rate} out of 5`;
});
