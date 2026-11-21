import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validQuantity, vegetarianConflict, deliveryFee } from '../utils/rules';
export default function Order({ cart, meals, change, remove, clear }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', method: 'Pickup', area: '', preference: 'No restriction' });
  const [errors, setErrors] = useState({});
  const items = cart.map(row => ({...row, meal: meals.find(meal => meal.id === row.id)}));
  const subtotal = items.reduce((sum, item) => sum + (item.meal?.price || 0) * item.quantity, 0);
  const fee = deliveryFee(form.method);
  const conflict = vegetarianConflict(items.filter(item => item.meal), form.preference);
  const update = e => setForm(previous => ({...previous, [e.target.name]: e.target.value}));
  function submit(e) {
    e.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Enter a name with at least 2 characters.';
    if (!/^03\d{9}$/.test(form.phone.trim())) next.phone = 'Enter an 11-digit Pakistani mobile number starting with 03.';
    if (form.method === 'Delivery' && !['F-8', 'F-10', 'G-10'].includes(form.area)) next.area = 'Choose a supported delivery area.';
    if (!items.length) next.cart = 'Add at least one meal.';
    if (items.some(item => !item.meal || !validQuantity(item.quantity, item.meal.stock))) next.cart = 'Remove unavailable meals or adjust quantities to the available limit.';
    if (conflict) next.preference = 'Remove chicken meals or change your dietary preference.';
    setErrors(next);
    if (!Object.keys(next).length) { const summary = { items, form, subtotal, fee, total: subtotal + fee }; clear(); navigate('/confirmation', { state: summary }); }
  }
  return <main className="wrap"><div className="page-heading"><span className="eyebrow">YOUR ORDER</span><h1>Make it yours.</h1><p>Review your meals and choose how to receive them. This is a simulated order; no payment is collected.</p></div><form onSubmit={submit} noValidate><div className="order-layout"><section className="panel"><h2>1. Your meals</h2>{!items.length ? <p>Your order is empty. <Link to="/menu">Explore the menu</Link>.</p> : items.map(item => <div className="order-item" key={item.id}><div><strong>{item.meal?.name || 'Meal no longer available'}</strong><p>{item.meal ? `Rs. ${item.meal.price} each · ${item.meal.stock} available` : 'Please remove this saved item.'}</p><button type="button" className="text-button" onClick={() => remove(item.id)}>Remove</button></div><label>Quantity<input type="number" min="1" max={Math.min(6, item.meal?.stock || 0)} value={item.quantity} onChange={e => change(item.id, Number(e.target.value))} /></label></div>)}<p className="hint">Up to 6 portions per meal, subject to availability.</p>{errors.cart && <p className="error" role="alert">{errors.cart}</p>}<Link to="/menu">+ Add more meals</Link></section><section className="panel"><h2>2. Your details</h2><label>Name<input name="name" value={form.name} onChange={update} autoComplete="name" /></label>{errors.name && <p className="error">{errors.name}</p>}<label>Mobile number<input name="phone" value={form.phone} onChange={update} inputMode="tel" placeholder="03XXXXXXXXX" /></label>{errors.phone && <p className="error">{errors.phone}</p>}<label>Dietary preference<select name="preference" value={form.preference} onChange={update}><option>No restriction</option><option>Vegetarian</option></select></label>{conflict && <p className="error">Your order contains chicken. Remove it or change your preference.</p>}{errors.preference && <p className="error">{errors.preference}</p>}<label>Fulfilment<select name="method" value={form.method} onChange={update}><option>Pickup</option><option>Delivery</option></select></label>{form.method === 'Delivery' && <><label>Delivery area<select name="area" value={form.area} onChange={update}><option value="">Choose an area</option><option>F-8</option><option>F-10</option><option>G-10</option></select></label>{errors.area && <p className="error">{errors.area}</p>}</>}<p className="hint">Pickup from F-8 is free. Delivery to F-8, F-10 or G-10 costs Rs. 150.</p></section><aside className="panel summary"><h2>Order summary</h2><div className="row"><span>Portions</span><strong>{items.reduce((sum, item) => sum + (Number.isFinite(item.quantity) ? item.quantity : 0), 0)}</strong></div><div className="row"><span>Subtotal</span><strong>Rs. {subtotal}</strong></div><div className="row"><span>Delivery</span><strong>Rs. {fee}</strong></div><div className="row total"><span>Total</span><strong>Rs. {subtotal + fee}</strong></div><button type="submit" className="wide">Confirm simulated order</button><p className="hint">No real order or payment will be sent.</p></aside></div></form></main>;
}
