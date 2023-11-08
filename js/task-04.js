const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const result = document.querySelector("#value");


plusBtn.addEventListener(`click`, onPlusBtnClick)

function onPlusBtnClick(event) {
    let plusBtn = result.textContent
    result.textContent = parseInt(plusBtn) + 1


}

minusBtn.addEventListener(`click`, onMinusBtnClick)

function onMinusBtnClick(event) {
    let plusBtn = result.textContent
    result.textContent = parseInt(plusBtn) - 1 > 0 ? parseInt(plusBtn) - 1 : 0;


}