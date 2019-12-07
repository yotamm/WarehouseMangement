import { Category, Inventory } from "./types";

const catHome: Category = 'home';
const catOffice: Category = 'office';
const catGarden: Category = 'garden';

const inventory: Inventory =  [
	{product: {id: 1, name: 'P1', price: 1, categories: [catHome, catOffice]}, amount: 10, location: {isle: 1, rack: 2, shelf: 3}},
	{product: {id: 2, name: 'P2', price: 10, categories: [catGarden]}, amount: 3, location: {isle: 3, rack: 2, shelf: 1}}
];

export function getInventory(): Inventory {
	console.log('Make API call to get inventory list');
	return inventory;
}