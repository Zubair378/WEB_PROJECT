import { Link, useLocation } from 'react-router-dom';
export default function Confirmation() {
  const { state } = useLocation();
  if (!state) return <main className="wrap"><h1>No recent order to show</h1><p>Complete a simulated order to see its summary here.</p><Link to="/menu">Browse the menu</Link></main>;
  return <main className="wrap"><div className="confirmation panel"><span className="eyebrow">SIMULATION COMPLETE</span><h1>You're all set, {state.form.name}.</h1><p>Your simulated order has been confirmed. No food has been ordered and no payment was taken.</p><h2>Your summary</h2>{state.items.map(item => <div className="row" key={item.id}><span>{item.quantity} × {item.meal.name}</span><span>Rs. {item.quantity * item.meal.price}</span></div>)}<div className="row"><span>{state.form.method}{state.form.method === 'Delivery' ? ` · ${state.form.area}` : ' · F-8 pickup'}</span><span>Rs. {state.fee}</span></div><div className="row total"><strong>Total</strong><strong>Rs. {state.total}</strong></div><Link className="button" to="/menu">Back to menu</Link></div></main>;
}
