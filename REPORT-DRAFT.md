# Assignment 02 report draft — Campus Table

**Student:** Muhammad Zubair Tariq  
**Roll number / section:** 24i-2095 / CY-C  
**Repository:** https://github.com/Zubair378/WEB_PROJECT   
**Deployment:** https://zubair378.github.io/WEB_PROJECT/  
**Final commit:** See the submitted PDF report.

## Business profile
Campus Table is a fictional student meal service in Islamabad with 12 meal options. Its audience is university students seeking quick, affordable meals. Customers browse, choose portions and simulate a pickup or delivery order. Its goal is a completed, reviewed order.

## Operating rules
| Rule | Where communicated and response | Boundary |
|---|---|---|
| 1–6 portions per meal, no more than current stock | Detail and order pages; invalid quantities prevent confirmation | 6 allowed when stock is 6; 7 rejected |
| Vegetarian preference cannot include chicken | Meal details and order form; conflicting selection blocks confirmation | Vegetarian plus only vegetarian items succeeds; adding chicken blocks it |
| Delivery only to F-8, F-10 or G-10, fee Rs. 150; F-8 pickup free | Detail and order; unsupported or missing area blocks delivery | F-10 accepted; no selected area rejected |

## Investigation and frontend decisions
See `DECISIONS.md` for observations, tasks, potential business consequences, alternatives, tradeoffs and code locations. Reference screenshots and application captures are in `evidence/`; see `DECISIONS.md`. The linked PDF is only the reference menu, not evidence about the restaurant's other interfaces.

## Implementation
Screenshots of the menu, details, order, confirmation, and mobile menu are in `evidence/`.

## Verification
Automated test: `node --test`, four cases passed (ordinary quantity, limit, over limit, changed stock). Production build passed with two dependency directive warnings. A headless Edge check at 390 px searched, added a meal, checked validation and confirmed an order; no page errors or page-wide overflow were observed in that journey.

An automated Edge check at 1280 px covered search and filtering, details, cart restoration, validation, vegetarian conflict, delivery, confirmation, invalid ID, unavailable saved selection and loading recovery. The 390 px menu showed no horizontal overflow. The public nested detail route opened and refreshed successfully. Keyboard testing and the final submission review remain.

## Limitations
The app is a simulation, with local rather than live stock and no payment or backend. The final PDF report is submitted separately.
