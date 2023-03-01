import { Item } from "../types/types";

export const getTotalQuantity = (items: Item[]) =>
  items.reduce((quantity, item) => (item.quantity ?? 0) + quantity, 0);

export const getTotalAmount = (items: Item[]) =>
  items.reduce((total, curr) => {
    const price = Math.max(curr.price, 0);
    return total + price * curr.quantity!;
  }, 0);
