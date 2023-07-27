async function getcategories() {
  try {
    let res = await fetch("https://fakestoreapi.com/products/categories");

    let categories = await res.json();

    for (let i = 0; i < categories.length; i++) {
      document.getElementById("Accessories-categories").innerHTML =
        document.getElementById("Accessories-categories").innerHTML +
        `<span>${categories[i]}</span>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getcategories();
