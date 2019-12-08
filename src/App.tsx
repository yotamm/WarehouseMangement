import React, { useCallback, useEffect, useState }    from 'react';
import { getInventory }                               from "./api";
import './App.css';
import ProductList                                    from "./ProductList";
import InventoryList                                  from "./InventoryList";
import { ProductInventory, updateFunction, Inventory } from "./types";

function App() {
	const [inventory, setInventory] = useState([] as Inventory);

	useEffect(() => {
		// @ts-ignore
		setInventory(getInventory());
	}, []);

	const updateProducts: updateFunction = useCallback((productId, newValues) => {
		const originalProdIndex = inventory.findIndex((item: ProductInventory) => item.product.id === productId);
     inventory[originalProdIndex].product = {...inventory[originalProdIndex].product, ...newValues};
     setInventory([...inventory]);
	}
, [inventory]);

	const updateInventory: updateFunction = useCallback((productId, newValues) => {
		const originalProdIndex = inventory.findIndex(item => item.product.id === productId);
     inventory[originalProdIndex] = {...inventory[originalProdIndex], ...newValues};
     setInventory([...inventory]);
	}
, [inventory]);

	let categories: any = [];
	inventory.forEach(value => categories.push(...value.product.categories));
	categories = new Set(categories);
	let totalAmount = 0;
	inventory.forEach(value => totalAmount += value.amount);
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
