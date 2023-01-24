export interface Item {
	title: string;
	description: string;
	price: number;
	id: string;
	quantity?: number;
}

export interface CartInitialState {
	items: Item[];
	quantity: number;
}
