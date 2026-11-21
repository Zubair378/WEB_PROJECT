import { Link } from 'react-router-dom';
export default function MealCard({ meal, add }) {
  return <article className="card"><div className="meal-art" aria-hidden="true">{meal.vegetarian ? '🥬' : '🍽'}</div><div className="card-body"><div className="row"><span className="tag">{meal.category}</span><span className="stock">{meal.stock ? `${meal.stock} available` : 'Sold out'}</span></div><h3><Link to={`/meals/${meal.id}`}>{meal.name}</Link></h3><p>{meal.description}</p><div className="row"><strong>Rs. {meal.price}</strong><button disabled={!meal.stock} onClick={() => add(meal.id)}>Add +</button></div></div></article>;
}
