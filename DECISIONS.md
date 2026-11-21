# Frontend decisions

Reference for the following initial observations: [Tandoori F-10 flyer menu, March 2025](https://tandoorirestaurants.pk/wp-content/uploads/2025/04/F-10-Flyer-Menu-March-2025.pdf). This is a static PDF menu, not a test of any separate ordering system. Capture and annotate the relevant reference and application screens before submission.

## 1. Finding meals in a dense menu
- **Problem:** The two-page flyer lists many items in dense columns; finding a particular dish or comparing prices requires scanning or using the PDF viewer's search.
- **Decision:** Provide a search box, category filter and price sorting above a responsive card grid.
- **Alternative:** Use category headings and a long unfiltered list.
- **Reason:** Students can narrow choices quickly and compare their costs.
- **Tradeoff:** Controls take some screen space and filtering requires state.
- **Code:** `src/pages/Menu.jsx`; layout in `src/style.css`.
- **Evidence to capture:** Flyer page 2; then search for chicken and sort by price on the Campus Table menu.

## 2. Choosing a suitable meal
- **Problem:** Several flyer entries list names and prices without ingredient descriptions or clear dietary labels. A vegetarian customer may have to ask for clarification.
- **Decision:** Show meal descriptions, category and vegetarian suitability on cards and details.
- **Alternative:** Provide dietary information only on request.
- **Reason:** Customers can assess choices before adding them.
- **Tradeoff:** The business must keep ingredient and suitability information accurate. This fictional site does not promise allergen safety.
- **Code:** `src/data/meals.js`, `src/components/MealCard.jsx`, `src/pages/Details.jsx`.
- **Evidence to capture:** Flyer page 2 sandwich section; open a Campus Table detail page.

## 3. Maintaining an order while comparing
- **Problem:** The flyer is a static menu with phone delivery details; it does not itself maintain an editable selection or calculated order summary.
- **Decision:** Keep the cart in shared React state and local storage; provide editable quantities and a visible total.
- **Alternative:** Ask customers to record their choices manually before calling.
- **Reason:** Customers can return to the menu without losing their selection and review costs.
- **Tradeoff:** Saved selections must be checked against changed availability.
- **Code:** `src/App.jsx`, `src/pages/Order.jsx`, `src/utils/rules.js`.
- **Evidence to capture:** Flyer contact details on page 1; add a meal, browse away, return to the order and change quantity.

These are observations about the linked flyer. Potential consequences are that customers may spend more time choosing, need clarification, or abandon an order; no sales figures are claimed.
