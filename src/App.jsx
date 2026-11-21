import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import mealData from './data/meals';
import Menu from './pages/Menu';
import Details from './pages/Details';
import Order from './pages/Order';
import Confirmation from './pages/Confirmation';
function savedCart() {
  try { const saved = JSON.parse(localStorage.getItem('campus-table-cart') || '[]'); return Array.isArray(saved) ? saved.filter(item => item && typeof item.id === 'string' && Number.isInteger(item.quantity) && item.quantity > 0) : []; } catch { return []; }
}
export default function App() {
  const [cart, setCart] = useState(savedCart);
  const [meals, setMeals] = useState([]);
  const [status, setStatus] = useState('loading');
  const [attempt, setAttempt] = useState(0);
  const [fail, setFail] = useState(false);
  const [changed, setChanged] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => { try { localStorage.setItem('campus-table-cart', JSON.stringify(cart)); } catch { /* Storage may be unavailable. */ } }, [cart]);
  useEffect(() => {
    setStatus('loading');
    const timer = setTimeout(() => {
      Promise.resolve().then(() => { if (fail) throw new Error('Demo failure'); return mealData.map(meal => changed && meal.id === 'chicken-rice' ? {...meal, stock: 0} : meal); }).then(data => {setMeals(data); setStatus('ready');}).catch(() => setStatus('error'));
    }, 350);
    return () => clearTimeout(timer);
  }, [attempt, fail, changed]);
  function add(id) {
    const meal = meals.find(item => item.id === id);
    if (!meal || !meal.stock) return;
    const current = cart.find(item => item.id === id)?.quantity || 0;
    if (current >= Math.min(6, meal.stock)) { setMessage(`The limit for ${meal.name} is ${Math.min(6, meal.stock)}.`); return; }
    setCart(previous => previous.some(item => item.id === id) ? previous.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item) : [...previous, {id, quantity: 1}]);
    setMessage(`${meal.name} added to your order.`);
  }
  const change = (id, quantity) => setCart(previous => previous.map(item => item.id === id ? {...item, quantity} : item));
  const remove = id => setCart(previous => previous.filter(item => item.id !== id));
  return <><a className="skip" href="#main">Skip to content</a><header><div className="nav wrap"><Link className="brand" to="/">CAMPUS<span> TABLE</span><small>ISLAMABAD</small></Link><nav aria-label="Main navigation"><NavLink to="/menu">Menu</NavLink><NavLink to="/order">Your order <span className="count">{cart.reduce((sum, item) => sum + (Number.isFinite(item.quantity) ? item.quantity : 0), 0)}</span></NavLink></nav></div></header>{message && <div className="toast" role="status">{message} <button className="text-button" onClick={() => setMessage('')} aria-label="Dismiss message">×</button></div>}<div id="main">{status === 'loading' ? <main className="wrap"><p role="status">Loading the menu…</p></main> : status === 'error' ? <main className="wrap"><h1>We couldn't load the menu</h1><p>Turn off the failure demonstration and try again.</p><button onClick={() => setAttempt(value => value + 1)}>Retry</button></main> : <Routes><Route path="/" element={<main><section className="hero"><div className="wrap hero-inner"><div><span className="eyebrow light">GOOD FOOD, BETWEEN CLASSES</span><h1>A better break<br />starts here.</h1><p>Fresh, comforting meals made for student schedules and budgets in Islamabad.</p><Link className="button" to="/menu">Explore the menu →</Link><p className="hero-note">F-8 pickup · Delivery to F-8, F-10 and G-10</p></div><div className="hero-illustration" aria-hidden="true"><span>🥗</span><small>MADE FOR<br />YOUR DAY</small></div></div></section><section className="wrap intro"><span className="eyebrow">A LITTLE MORE TIME FOR YOU</span><h2>Good food, made simple.</h2><div className="features"><article><strong>01 / Find your meal</strong><p>Browse prices, ingredients and availability in one place.</p></article><article><strong>02 / Make your pick</strong><p>Choose portions and see your total before you confirm.</p></article><article><strong>03 / Pick up or deliver</strong><p>Choose free F-8 pickup or delivery to selected areas.</p></article></div><Link to="/menu">See all meals →</Link></section></main>} /><Route path="/menu" element={<Menu meals={meals} add={add} />} /><Route path="/meals/:id" element={<Details meals={meals} add={add} />} /><Route path="/order" element={<Order cart={cart} meals={meals} change={change} remove={remove} clear={() => setCart([])} />} /><Route path="/confirmation" element={<Confirmation />} /><Route path="*" element={<main className="wrap"><h1>Page not found</h1><Link to="/menu">Go to the menu</Link></main>} /></Routes>}</div><footer><div className="wrap"><strong>CAMPUS TABLE</strong><p>Fictional student meals in Islamabad · Orders are simulated.</p><details><summary>Testing controls</summary><p>Use these controls to demonstrate recovery from errors and changed availability.</p><label><input type="checkbox" checked={fail} onChange={e => setFail(e.target.checked)} /> Simulate loading failure</label><label><input type="checkbox" checked={changed} onChange={e => setChanged(e.target.checked)} /> Mark Chicken Rice Bowl sold out</label><button onClick={() => setAttempt(value => value + 1)}>Reload menu</button></details></div></footer></>;
}
