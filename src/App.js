import React                         from 'react';
import { getInventory, getProducts } from "./api.ts";
import './App.css';
import ProductList                   from "./ProductList.tsx";
import InventoryList                 from "./InventoryList.tsx";

function App() {
	const products = getProducts();
	const inventory = getInventory();
	let categories = [];
	products.forEach(value => categories.push(...value.categories));
	categories = Array.from(new Set(categories));
	let totalAmount = 0;
	inventory.forEach(value => totalAmount+=value.amount);
	return (
			<div className='tables-container'>
				<div className={'ui raised very padded text container segment'}>
					<ProductList products={products}/>
					<br/>
					<p># of products: {products.length} | # of categories: {categories.length}</p>
				</div>
				<div className={'ui raised very padded text container segment'}>
					<InventoryList inventory={inventory}/>
          <br/>
          <p># of products: {inventory.length} | Total amount: {totalAmount}</p>
				</div>
			</div>
	);
}

export default App;
