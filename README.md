# BookMyPG — Project Website

A responsive front-end prototype for a PG/hostel discovery and enquiry platform.

## Included
- Responsive landing page for desktop and mobile
- Search by city/area, room type and monthly budget
- Filters for audience/property type and price sorting
- Sample PG cards with save-to-shortlist interaction
- Property enquiry modal with front-end form validation
- Sections explaining the platform and its workflow

## Run locally
1. Download and unzip this folder.
2. Open `index.html` in a browser.

No build tools or dependencies are required.

## Publish with GitHub Pages
1. Sign in at https://github.com.
2. Create a **Public** repository, for example `bookmypg-website`.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then click **Save**.
7. Wait for GitHub Pages to deploy. Your site will be at:
   `https://YOUR-USERNAME.github.io/bookmypg-website/`

If you name the repository `YOUR-USERNAME.github.io`, the site URL will instead be `https://YOUR-USERNAME.github.io/`.

## Important project-demo limitations
This is a static front-end prototype. Listings and prices are sample data in `script.js`. The enquiry form validates in the browser but does not send or save enquiries. There is no login, database, live inventory, owner dashboard, map integration or payment processing yet.

For a real booking platform, add a backend/API, database, authentication, owner listing workflow, availability updates, server-side form handling, privacy/security controls and a trusted payment provider. Do not collect real customer information through this demo form.

## Customise
- Change sample PGs and prices in `script.js` (`properties` array).
- Change text and page sections in `index.html`.
- Change colors, spacing and responsive layout in `style.css`.
- Replace the sample Unsplash image URLs with images you own or have permission to use.
