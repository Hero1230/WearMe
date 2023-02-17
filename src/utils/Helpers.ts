import { Item } from "../types/types";

export const getTotalQuantity = (items: Item[]) =>
  items.reduce((quantity, item) => item.quantity! + quantity, 0);

export const getTotalAmount = (items: Item[]) =>
  items.reduce((total, curr) => total + curr.price * curr.quantity!, 0);
