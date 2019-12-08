import React        from "react";
import { Product }  from "./types";
import EditableCell from "./EditableCell";

const ProductList = (props: any) => {
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
								<td><EditableCell onChange={props.updateProducts} field="name" text={prod.name} id={prod.id}/></td>
								<td><EditableCell text={prod.price} field="price" id={prod.id}/></td>
								<td>{prod.categories.join(', ')}</td>
							</tr>
					))}
				</tbody>
			</table>
	);
};

export default ProductList;