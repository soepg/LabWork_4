"use strict";

const prepInput = document.querySelector("#indi-prep-time");
const cookInput = document.querySelector("#indi-cook-time");
const calcBtn = document.querySelector("#indi-calc-button");
const resDisplay = document.querySelector("#indi-time-result");

function calcTotalTime() {
    const prepVal = prepInput.value;
    const cookVal = cookInput.value;

    if (prepVal.trim() === "" || cookVal.trim() === "") {
        resDisplay.textContent = "Error: enter both time values";
        resDisplay.className = "error-text";
        return;
    }
    const prepTime = Number(prepVal);
    const cookTime = Number(cookVal);

    if (isNaN(prepTime) || isNaN(cookTime) || prepTime < 0 || cookTime < 0) {
        resDisplay.textContent = "Error: enter valid number";
        resDisplay.className = "error-text";
        return;
    }

    const total = prepTime + cookTime;
    resDisplay.textContent = `Total custom time:${total} minutes`;
    resDisplay.className = "success-text";
}

calcBtn.addEventListener("click", calcTotalTime)