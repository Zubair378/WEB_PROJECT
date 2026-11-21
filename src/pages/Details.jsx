import { Link, useParams } from 'react-router-dom';
export default function Details({ meals, add }) {
  const { id } = useParams();
  const meal = meals.find(item => item.id === id);
  if (!meal) return <main className="wrap"><h1>Meal not found</h1><p>This meal is not on the menu.</p><Link to="/menu">Back to menu</Link></main>;
  return <main className="wrap"><Link to="/menu">← Back to menu</Link><div className="detail"><div className="detail-art" aria-hidden="true">{meal.vegetarian ? '🥬' : '🍽'}</div><div><span className="eyebrow">{meal.category} · {meal.stock ? `${meal.stock} available` : 'Sold out'}</span><h1>{meal.name}</h1><p>{meal.description}</p><p>{meal.vegetarian ? 'Suitable for a vegetarian preference.' : 'Contains chicken; not suitable for a vegetarian preference.'}</p><p>Prepared in a shared kitchen. Ask about allergies before ordering.</p><h2>Rs. {meal.price}</h2><p>Maximum 6 portions per meal. Delivery to F-8, F-10 and G-10 is Rs. 150; pickup is free.</p><button disabled={!meal.stock} onClick={() => add(meal.id)}>Add to order</button> <Link to="/order">View order →</Link></div></div></main>;
}
