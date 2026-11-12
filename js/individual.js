"use strict";

(function () {
    const form = document.querySelector(".indi-inputs");
    const prepInput = document.querySelector(".indi-prep-time");
    const cookInput = document.querySelector(".indi-cook-time");
    const resDisplay = document.querySelector(".indi-time-result");

    if (!form || !prepInput || !cookInput || !resDisplay) {
        return;
    }

    function showResult(message, isError) {
        resDisplay.textContent = message;
        resDisplay.classList.toggle("error-text", isError);
        resDisplay.classList.toggle("success-text", !isError);
    }

    function clearRsult() {
        resDisplay.textContent = "";
        resDisplay.classList.remove("error-text", "success-text");
    }

    function calcTotalTime() {
        if (prepInput.value.trim() === "" || cookInput.value.trim() === "") {
            return showResult("Error: enter both time values", true);
        }

        const prepTime = Number(prepInput.value);
        const cookTime = Number(cookInput.value);

        if (isNaN(prepTime) || isNaN(cookTime) || prepTime < 0 || cookTime < 0) {
            return showResult("Error: enter a valid number", true);
        }

        showResult(`Total time: ${prepTime + cookTime} minutes`, false);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        calcTotalTime();
    });

    [prepInput, cookInput].forEach(function (input) {
        input.addEventListener("input", clearRsult);
    });
})();