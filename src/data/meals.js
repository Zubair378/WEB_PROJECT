const meals = [
  ['chicken-rice', 'Chicken Rice Bowl', 'Chicken', 540, 'Grilled chicken, rice and cucumber salad', false],
  ['daal-rice', 'Daal Rice Bowl', 'Vegetarian', 390, 'Yellow lentils, rice and fresh salad', true],
  ['chicken-wrap', 'Chicken Tikka Wrap', 'Chicken', 480, 'Chicken tikka, yogurt sauce and lettuce', false],
  ['chana-wrap', 'Chana Wrap', 'Vegetarian', 380, 'Spiced chickpeas, lettuce and mint sauce', true],
  ['chicken-pasta', 'Chicken Pasta', 'Chicken', 590, 'Chicken and pasta in a tomato sauce', false],
  ['veg-pasta', 'Garden Pasta', 'Vegetarian', 470, 'Pasta with peppers and tomato sauce', true],
  ['chicken-biryani', 'Chicken Biryani', 'Chicken', 520, 'Chicken biryani with cucumber raita', false],
  ['veg-biryani', 'Vegetable Biryani', 'Vegetarian', 430, 'Vegetable biryani with cucumber raita', true],
  ['chicken-salad', 'Chicken Salad', 'Chicken', 510, 'Chicken, greens, cucumber and yogurt dressing', false],
  ['chana-salad', 'Chickpea Salad', 'Vegetarian', 350, 'Chickpeas, tomato, cucumber and lemon', true],
  ['chicken-sandwich', 'Chicken Sandwich', 'Chicken', 460, 'Chicken, lettuce and yogurt spread', false],
  ['paneer-wrap', 'Paneer Wrap', 'Vegetarian', 490, 'Paneer, peppers and mint sauce', true]
].map(([id, name, category, price, description, vegetarian]) => ({id, name, category, price, description, vegetarian, stock: 6}));
export default meals;
