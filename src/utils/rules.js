export function validQuantity(quantity, stock) { return Number.isInteger(quantity) && quantity >= 1 && quantity <= Math.min(6, stock); }
export function vegetarianConflict(items, preference) { return preference === 'Vegetarian' && items.some(item => !item.meal.vegetarian); }
export function deliveryFee(method) { return method === 'Delivery' ? 150 : 0; }
