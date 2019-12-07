import { Category, Inventory, ProductInfo, Products } from "./types";

const catHome: Category = 'home';
const catOffice: Category = 'office';
const catGarden: Category = 'garden';
const products: Products = [
	{id: 1, name: 'P1', price: 1, categories: [catHome, catOffice]},
	{id: 2, name: 'P2', price: 10, categories: [catGarden]}
];

const inventory: Inventory =  [
	{product: products[0], amount: 10, location: {isle: 1, rack: 2, shelf: 3}},
	{product: products[1], amount: 3, location: {isle: 3, rack: 2, shelf: 1}}
];

export function getProducts(): Products {
	console.log('Make API call to get product list');
	return products;
}

export function getInventory(): Inventory {
	console.log('Make API call to get inventory list');
	return inventory;
}

export function setProduct(productId: number, newValues: ProductInfo) {
	const originalProdIndex = products.findIndex(product => product.id === productId);
	products[originalProdIndex] = {...products[originalProdIndex], ...newValues};
}

