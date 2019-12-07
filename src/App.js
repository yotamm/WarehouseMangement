import React, { useCallback, useEffect, useState } from 'react';
import { getInventory }               from "./api.ts";
import './App.css';
import ProductList                                 from "./ProductList.tsx";
import InventoryList                               from "./InventoryList.tsx";

function App() {
	const [inventory, setInventory] = useState([]);

	useEffect(() => {
		setInventory(getInventory());
	}, []);

	const updateProducts = useCallback((productId, newValues) => {
		const originalProdIndex = inventory.findIndex(item => item.product.id === productId);
     inventory[originalProdIndex].product = {...inventory[originalProdIndex].product, ...newValues};
     setInventory([...inventory]);
	}
, [inventory]);

	const updateInventory = useCallback((productId, newValues) => {
		const originalProdIndex = inventory.findIndex(item => item.product.id === productId);
     inventory[originalProdIndex] = {...inventory[originalProdIndex], ...newValues};
     setInventory([...inventory]);
	}
, [inventory]);

	let categories = new Set();
	inventory.forEach(value => categories.add(...value.product.categories));
	let totalAmount = 0;
	inventory.forEach(value => totalAmount += parseInt(value.amount));
	return (
			<div className='tables-container'>
				<div className={'ui raised very padded text container segment'}>
					<ProductList updateProducts={updateProducts} products={inventory.map(value => value.product)}/>
					<br/>
					<p># of products: {inventory.length} | # of categories: {categories.size}</p>
				</div>
				<div className={'ui raised very padded text container segment'}>
					<InventoryList updateProducts={updateProducts} updateInventory={updateInventory} inventory={inventory}/>
          <br/>
          <p># of products: {inventory.length} | Total amount: {totalAmount}</p>
				</div>
			</div>
	);
}

export default App;
