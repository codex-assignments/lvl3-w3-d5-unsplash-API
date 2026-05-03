This app is for Lvl 3 of Code X Academy week 3 assignment, using React Vite to create a small multi-page app that returns data from an API. 

To run this app, I have deployed it to gh-pages but you can also npm run dev to open a localhost. 


------

I want to use the Unsplash API, so I have a Home/Search page where the user can input a search query, click a button, and then see a gallery of returned photos. The user can then select one to be routed to a higher res version of the photo, and the user can "favorite" returned items to be listed on a third "page". The favorited items are stored in local storage. 

Installed and set up React Vite with npm create vite@latest . 
React, Javascript

Installed ReactRouter to use BrowserRouter, with npm i react-router and inserting <BrowserRouter> in main.jsx, wrapped by Use Strict and wrapping App.jsx

Installed and configured vite for Tailwind CSS. 

Google Gemini was used to quickly provide the Tailwind CSS.

Used Postman to test the API endpoints with the access key.

The client_id/access key is stored in the .env file, and the extension added to the gitignore, prefixed with VITE_ 

