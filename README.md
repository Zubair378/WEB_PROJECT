# Campus Table

Student: Zubair Tariq · Roll number and section: to be added

Campus Table is a fictional meal service for Islamabad university students. Customers browse meals, make a selection and complete a simulated order. No orders or payments are sent.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```
npm install
npm run dev
npm run build
npm test
```

The dependency lockfile is included. Use `npm ci` for a reproducible install.

Repository: https://github.com/Zubair378/WEB_PROJECT  
Deployment: https://zubair378.github.io/WEB_PROJECT/

## Routes and features

- `/`: business introduction; `/menu`: search, category and sorting.
- `/meals/:id`: meal details; `/order`: editable cart and form; `/confirmation`: simulated result.
- The cart is saved locally. Menu loading is asynchronous and errors can be retried.
- Pickup is from F-8; delivery is available to F-8, F-10 and G-10 for Rs. 150.
- GitHub Pages uses `public/404.html` to recover direct links and refreshes on nested routes. Vercel uses the rewrite in `vercel.json` and builds at the root URL.

## Reproduce edge cases

- Search for a nonsense word and use Clear search and filters. Visit `/meals/unknown` for an invalid ID.
- Add Chicken Rice Bowl, then open Testing controls in the footer and mark it sold out. Visit the order: remove the item or turn off the demonstration before confirming.
- Enable the loading failure in Testing controls. Disable it after the error, then use Retry.
- Set an item to 7, or select Vegetarian with a chicken item, then submit. Fix the conflict and submit again.
- Submit empty details and observe specific messages. Values in other fields remain.

## Rules and concept map

| Concept | Location |
| --- | --- |
| Local records | `src/data/meals.js` |
| Components, props, events | `src/components/MealCard.jsx`, `src/pages/Menu.jsx` |
| Routes and shared cart state | `src/App.jsx` |
| Parameters | `src/pages/Details.jsx` |
| Controlled form, validation, derived totals | `src/pages/Order.jsx` |
| Business rules | `src/utils/rules.js` |
| Storage and asynchronous mock loading | `src/App.jsx` |
| Rule tests | `tests/rules.test.js` |

Known limitations: no real restaurant, payment, delivery, server, or live inventory. The confirmation is held in navigation state and is not a permanent receipt. The Google font needs internet; the fallback fonts work offline. The report needs the student identifiers and final submission checks. Evidence screenshots are in `evidence/`.
