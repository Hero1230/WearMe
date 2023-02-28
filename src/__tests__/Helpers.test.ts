import { describe, expect, it } from "vitest";
import { Item } from "../types/types";
import { getTotalQuantity } from "../utils/Helpers";

describe("getTotalQuantity", () => {
  it("should return total quantity of provided items in array", () => {
    const array: Item[] = [
      { quantity: 2, title: "test", description: "test", price: 0, id: "test" },
      { quantity: 1, title: "test", description: "test", price: 0, id: "test" },
    ];
    const [item1, item2] = array;
    const result = getTotalQuantity(array);
    expect(result).toBe(item1.quantity! + item2.quantity!);
  });

  it("should return 0 when empty array is provided", () => {
    const array: Item[] = [];
    const result = getTotalQuantity(array);
    expect(result).toBe(0);
  });

  it("should return correct quantity for single item array", () => {
    const array: Item[] = [
      { quantity: 5, title: "test", description: "test", price: 0, id: "test" },
    ];
    const result = getTotalQuantity(array);
    expect(result).toBe(array[0].quantity);
  });

  it("should handle missing quantity property and return 0", () => {
    const array: Item[] = [
      { quantity: 2, title: "test", description: "test", price: 0, id: "test" },
      { title: "test", description: "test", price: 0, id: "test" },
    ];
    const result = getTotalQuantity(array);
    expect(result).toBe(2);
  });

  it("should handle negative quantity values and return the correct total", () => {
    const array: Item[] = [
      { quantity: 2, title: "test", description: "test", price: 0, id: "test" },
      { quantity: -1, title: "test", description: "test", price: 0, id: "test" },
      { quantity: 4, title: "test", description: "test", price: 0, id: "test" },
    ];
    const result = getTotalQuantity(array);
    expect(result).toBe(5);
  });
});
