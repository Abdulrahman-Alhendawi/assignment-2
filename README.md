# Personal Portfolio

## Description

This is a simple personal portfolio static website for Abdulrahman Alhendawi. It showcases a short bio, projects, and a contact form. UX features include:

- Time-based greeting (Good morning / Good afternoon / Good evening).
- Projects section with images and descriptions.
- Contact form with client-side validation, accessible loading/confirmation states, and a simulated 3‑second send delay.
- Smooth in-page scrolling and basic accessibility improvements.

## Files of interest

- index.html — main page
- style.css — site styles (includes smooth scrolling)
- script.js — contact form validation and loading simulation
- js/greeting.js — time-based greeting
- images/ — project and profile images

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Optional: Python 3 or Node.js if you want to serve the site via a local web server

## Run locally

1. Clone or download the repository and open a terminal in the project folder:
   cd "c:\Users\Abdulrahman\Desktop\Personal Portfolio Project SWE363\assignment-2"

2. Option A — Open directly:

   - Double-click `index.html` or open it from the browser (`File → Open`).
   - Note: Some browsers restrict loading resources via file://; if you see issues, use a local server.

3. Option B — Serve with Python 3:

   - Run: `python -m http.server 8000`
   - Open: `http://localhost:8000` in your browser

4. Option C — Serve with Node (http-server):

   - Install (if needed): `npm install -g http-server`
   - Run: `http-server -c-1`
   - Open the shown URL (usually `http://127.0.0.1:8080`)

5. Option D — VS Code Live Server:
   - Install the Live Server extension, open the project folder, right-click `index.html` and choose "Open with Live Server".

## Notes

- The contact form is client-side only and does not send emails. Integrate a backend or use an email API to enable real sending.
- Styles for error/loading/confirmation are inline; consider moving them to `style.css` for easier theming.
- For development, use the browser devtools to inspect console/errors.

## License

Personal project — include your preferred license if you plan to share publicly.
