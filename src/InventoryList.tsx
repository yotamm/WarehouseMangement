import React                from "react";
import { ProductInventory } from "./types";

const InventoryList = (props) => {
	return (
			<table>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Amount in stock</th>
					<th>Location in warehouse (Isle / Rack / Shelf)</th>
				</tr>
				{props.inventory.map((prod: ProductInventory) => (
						<tr>
							<td>{prod.product.id}</td>
							<td>{prod.product.name}</td>
							<td>{prod.amount}</td>
							<td>{`${prod.location.isle} / ${prod.location.rack} / ${prod.location.shelf}`}</td>
						</tr>
				))}
			</table>
	);
};

export default InventoryList;