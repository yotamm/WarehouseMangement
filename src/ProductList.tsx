import React                                 from "react";
import { Product, Products, updateFunction } from "./types";
import EditableCell                          from "./EditableCell";

const ProductList = (props: {products: Products, updateProducts: updateFunction}) => {
	return (
			<table className="ui celled table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Price</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>
					{props.products.map((prod: Product) => (
							<tr key={prod.id}>
								<td>{prod.id}</td>
								<td><EditableCell onChange={props.updateProducts} field="name" text={prod.name} id={prod.id} type="text"/></td>
								<td><EditableCell onChange={props.updateProducts} field="price" text={prod.price} id={prod.id} type="number"/></td>
								<td>{prod.categories.join(', ')}</td>
							</tr>
					))}
				</tbody>
			</table>
	);
};

export default ProductList;