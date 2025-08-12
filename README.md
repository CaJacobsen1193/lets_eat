# Let's Eat — Yelp Restaurant Finder

A simple React app that searches Yelp for restaurants using a search term and location. It also supports sorting by Best Match, Highest Rated, and Most Reviewed. The UI displays core business info like name, image, rating, review count, and address.

## What It Does
- Lets you enter a search term (e.g., "pizza") and a location (e.g., "Boston, MA").
- Provides three sort options: Best Match, Highest Rated, Most Reviewed.
- Shows a list of restaurants with image, rating, reviews, and address.

## Requirements
- Node.js and npm installed.

## Getting Started
1. Install dependencies:
   - Run: npm install
2. Start the development server:
   - Vite: npm run dev
   - Create React App: npm start
3. Open the app in your browser and try a search.

## Provide Your Yelp API Key (required)
This project requires your own Yelp Fusion API Key.

Steps:
1. Go to the Yelp Developers site, create an app, and copy your API key.
2. Open the file: src/utils/yelp.js
3. Find the line that defines the key, similar to:
   const yelpApi = 'YOUR_KEY_HERE'
4. Replace the placeholder with your actual Yelp API key string.
5. Save the file and run the app.

Notes:
- For quick local testing and learning, placing the key in src/utils/yelp.js is the simplest path.
- For production or public deployments, you should move the API call to a backend or serverless function so your key is not exposed in the browser.

## Typical Flow
1. Enter a search term and location.
2. Choose a sort option (Best Match, Highest Rated, Most Reviewed).
3. Click Search to fetch matching businesses from Yelp.
4. Results render as cards in the list.

## Troubleshooting
- If you see a 401 Unauthorized response, double-check that your key is correct and not expired.
- If you get empty results, try a broader term or a nearby city.
- Network or CORS-related issues can vary by environment; for production, consider routing calls through a backend.


