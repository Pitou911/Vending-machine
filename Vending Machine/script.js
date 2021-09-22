const purchaseBtn = document.querySelector(".purchase-btn");
const drinkBtn = document.querySelectorAll(".drink");
const amountInput = document.querySelector(".amount-input");

const drinkTypeRep = document.querySelector(".drink-type");
const amountRep = document.querySelector(".amount");
const totalRep = document.querySelector(".total");

// const receiption = document.querySelector(".receiption-container");
$(".the-receiption").hide();
for (let i = 0; i < drinkBtn.length; i++) {
  drinkBtn[i].addEventListener("click", function () {
    drinkBtn[i].classList.add("onClick");
    purchaseBtn.addEventListener("click", function () {
      if (amountInput.value > 0) {
        drinkTypeRep.textContent += ` ${drinkBtn[i].innerHTML}`;
        amountRep.textContent += ` ${amountInput.value}`;
        totalRep.textContent += ` $${amountInput.value * 2}`;
        $(".the-receiption").slideDown();
        setTimeout(function () {
          location.reload();
        }, 3000);
      }
    });
  });
}
