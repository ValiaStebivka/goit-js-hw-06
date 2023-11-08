  const categoriesList = document.getElementById('categories');
  const categoriesItems = document.querySelectorAll('.item');

  console.log(`Number of categories: ${categoriesItems.length}`);

  categoriesItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li');
    console.log(`\nCategory: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
  });