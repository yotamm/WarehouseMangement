import React                                           from "react";
import { Inventory, ProductInventory, updateFunction } from "./types";
import EditableCell                                    from "./EditableCell";

const InventoryList = (props: {inventory: Inventory, updateProducts: updateFunction, updateInventory: updateFunction}) => {
	return (
			<table className="ui celled table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Amount in stock</th>
						<th>Location in warehouse (Isle / Rack / Shelf)</th>
					</tr>
				</thead>
				<tbody>
					{props.inventory.map((prod: ProductInventory) => (
							<tr key={prod.product.id}>
								<td>{prod.product.id}</td>
								<td><EditableCell onChange={props.updateProducts} field="name" text={prod.product.name} id={prod.product.id} type="text"/></td>
								<td><EditableCell onChange={props.updateInventory} field="amount" text={prod.amount} id={prod.product.id} type="number"/></td>
								<td>{`${prod.location.isle} / ${prod.location.rack} / ${prod.location.shelf}`}</td>
							</tr>
					))}
				</tbody>
			</table>
	);
};

export default InventoryList;