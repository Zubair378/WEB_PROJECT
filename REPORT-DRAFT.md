# Assignment 02 report draft — Campus Table

**Student:** Zubair Tariq  
**Roll number / section:** ADD  
**Repository:** https://github.com/Zubair378/WEB_PROJECT (upload and verify)  
**Deployment:** ADD  
**Final commit:** ADD after final changes (`git rev-parse HEAD`)

## Business profile
Campus Table is a fictional student meal service in Islamabad with 12 meal options. Its audience is university students seeking quick, affordable meals. Customers browse, choose portions and simulate a pickup or delivery order. Its goal is a completed, reviewed order.

## Operating rules
| Rule | Where communicated and response | Boundary |
|---|---|---|
| 1–6 portions per meal, no more than current stock | Detail and order pages; invalid quantities prevent confirmation | 6 allowed when stock is 6; 7 rejected |
| Vegetarian preference cannot include chicken | Meal details and order form; conflicting selection blocks confirmation | Vegetarian plus only vegetarian items succeeds; adding chicken blocks it |
| Delivery only to F-8, F-10 or G-10, fee Rs. 150; F-8 pickup free | Detail and order; unsupported or missing area blocks delivery | F-10 accepted; no selected area rejected |

## Investigation and frontend decisions
See `DECISIONS.md` for observations, tasks, potential business consequences, alternatives, tradeoffs and code locations. Add three screenshots of the referenced flyer and three screenshots of the implemented improvements with short annotations. Verify each observation yourself; the linked PDF is only the reference menu, not evidence about its restaurant's other interfaces.

## Implementation
Add annotated screenshots of menu, meal details, order and confirmation at desktop and mobile widths.

## Verification
Automated test: `node --test`, four cases passed (ordinary quantity, limit, over limit, changed stock). Production build passed with two dependency directive warnings. A headless Edge check at 390 px searched, added a meal, checked validation and confirmed an order; no page errors or page-wide overflow were observed in that journey.

Still required: manually check 1280 px and keyboard navigation, browser console warnings, all edge cases and each improvement. Record actions, expected results, observed results and screenshots. Test the public deployment, including a direct nested route refresh. Do not claim unperformed checks.

## Limitations
The app is a simulation, with local rather than live stock and no payment or backend. Repository upload, deployment, screenshots, final commit and student identifiers remain incomplete. Generate the PDF only after completing the evidence and checking the result.
