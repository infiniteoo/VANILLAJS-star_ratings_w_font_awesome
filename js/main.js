// initial ratings
const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1,
};

// total stars
const starsTotal = 5;

// run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// form elements
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// init product
let product;

// product select change
productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  // enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});
