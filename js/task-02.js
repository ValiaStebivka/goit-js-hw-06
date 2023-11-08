  const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
    const element = document.createElement("li");
    element.textContent = ingredient;
    ingredientsList.append(element);
    element.classList.add("item");
});