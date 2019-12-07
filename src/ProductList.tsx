import React        from "react";
import { Product }  from "./types";
import EditableCell from "./EditableCell.tsx";

const ProductList = (props) => {
	return (
			<table>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Price</th>
					<th>Category</th>
				</tr>
				{props.products.map((prod: Product) => (
						<tr>
							<td>{prod.id}</td>
							<td><EditableCell text={prod.name} id={prod.id} onChange={id => {console.log('change product with id: ' + id)}}/></td>
							<td><EditableCell text={prod.price} id={prod.id}/></td>
							<td>{prod.categories.join(', ')}</td>
						</tr>
				))}
			</table>
	);
};

export default ProductList;