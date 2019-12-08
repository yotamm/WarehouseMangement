export type Products = Array<Product>;
export type Categories = Array<Category>;
export type Inventory = Array<ProductInventory>;
export type Category = 'home' | 'office' | 'garden';
export type Product = ProductInfo & {id: number};
export type ProductInfo = {
	name: string;
	price: number;
	categories: Categories;
};
export type ProductLocation = {
	isle: number;
	rack: number;
	shelf: number;
};
export type ProductInventory = {
	product: Product;
	amount: number;
	location: ProductLocation;
};

export type updateFunction = (productId: number, newValues: {}) => void;