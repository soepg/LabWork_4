"use strict";

const BASE_SERVINGS = 1;
const MIN_SERVINGS = 1;
const MAX_SERVINGS = 10;
let servings = BASE_SERVINGS;

const servingsCount = document.querySelector("#servings-count");
const decreaseButton = document.querySelector("#decrease-servings");
const increaseButton = document.querySelector("#increase-servings");
const quantities = document.querySelectorAll(".ingredient-quantity");
const checks = document.querySelectorAll(".ingredient-check");
const progress = document.querySelector("#ingredients-progress");
const resetButton = document.querySelector("#reset-ingredients");

function updateServings() {
    const factor = servings / BASE_SERVINGS;
    servingsCount.textContent = servings;

    quantities.forEach(function (quantity) {
        const min = Number(quantity.dataset.min) * factor;
        const max = Number(quantity.dataset.max) * factor;
        if (min === max) {
            quantity.textContent = min;
        } else {
            quantity.textContent = `${min}-${max}`;
        }
    });

    decreaseButton.disabled = servings === MIN_SERVINGS;
    increaseButton.disabled = servings === MAX_SERVINGS;

}

function decreaseServings() {
    if (servings > MIN_SERVINGS) {
        servings = servings - 1;
        updateServings();
    }
}

function increaseServings() {
    if(servings < MAX_SERVINGS) {
        servings = servings + 1;
        updateServings();
    }
}

function updateIngredients() {
    let prepared = 0;
    checks.forEach(function (check) {
        const item = check.closest(".ingredient");
        item.classList.toggle("is-prepared", check.checked);
        if(check.checked) {
            prepared = prepared + 1;
        }
    });
    progress.textContent = `Prepared ${prepared} of ${checks.length}`;
}

function resetIngredients() {
    checks.forEach(function (check) {
        check.checked = false;
    });
    updateIngredients();
}

decreaseButton.addEventListener("click", decreaseServings);
increaseButton.addEventListener("click", increaseServings);
checks.forEach(function (check) {
    check.addEventListener("change", updateIngredients);
});
resetButton.addEventListener("click", resetIngredients);

updateServings();
resetIngredients();