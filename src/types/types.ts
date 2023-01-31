export interface Item {
	title: string;
	description: string;
	price: number;
	id: string;
	quantity?: number;
}

export interface ComponentItemProp {
	items: Item[];
}

export interface CartInitialState {
	items: Item[];
}

export interface CartState {
	cart: CartInitialState;
}

export interface ProductFetch {
	category: string;
	description: string;
	id: string;
	price: number;
	title: string;
}
export interface ItemListPreviewProps {
	category: string;
	title: string;
	quantity: number;
}
