This app is for Lvl 3 of Code X Academy week 3 assignment, using React Vite to create a small multi-page app that returns data from an API. 

To run this app, npm run dev to open a localhost. 
Create a .env file as seen in .env.sample to insert a free API access key for Unsplash API.

I have also deployed to gh-pages npm package, where the .env information will be compiled and pushed through the dist folder. 

------

I want to use the Unsplash API, so I have a Home/Search page where the user can input a search query, click a button, and then see a small gallery of returned photos from Unsplash with credit and a link to the uploader. 

Installed and set up React Vite with npm create vite@latest . 
React, Javascript

Installed ReactRouter to use BrowserRouter, with npm i react-router and inserting <BrowserRouter> in main.jsx, wrapped by Use Strict and wrapping App.jsx

Installed and configured vite for Tailwind CSS. 

Google Gemini was used to quickly provide the Tailwind CSS and summarize/design the About page.


-------------
API info:

Used Postman to test the API endpoints with the access key.

The client_id/access key is stored in the .env file, and the extension added to the gitignore, prefixed with VITE_ 
The end points require params, ?query & client_id

The API requires displaying the user.name and using user.links.html to hotlink. 
Stretch: Also could add a request to links.download_location URL provided in the photo to help Unsplash track popularity. 

results - array of photo objects
urls.regular - img detailed view
urls.small - img gallery grid view
alt_description - for img alt tags
user.name - uploader's credit

-------------
How the search works:

SearchPage is the "home page" where it will have the search bar, the useState for the search query, the useEffect to fetch from Unsplash API, and map over results to render a limited gallery style display of results using the ImageCard component. 
Stretch: add pagination and detailed views of selected images

