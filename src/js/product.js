import { getParam } from "./utils.mjs";
// import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");

// moved to ProductDetails.mjs
// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }

const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);
product.init();

// both moved to ProductDetails.mjs

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
