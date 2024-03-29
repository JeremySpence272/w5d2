## Overview of the project and its objectives.

This is a simple app to practice React and Typescript. Keep in mind this was my first TS project ever 😅

The project displays a simple interface with tabs to look at a list of books and websites to learn programming.

You can add recommendations as well as delete them.

## Instructions for setting up and running the application locally.

Run the react app with `npm run dev` and make sure you set up the local server with `npm i json-server` and then `json-server ./data/data.json --port 8080`

## Description of the project structure and organization of files.

Inside the src file there are 3 main folders for components, hooks, and pages. Most of the logic is inside the App.tsx. As of right now the props are passed down there is no global state management.

There's also a file used to explicitly define types, although the types for the props for each page is defined before the functions

## Details of any external libraries or dependencies used in the project.

VITE, Typescript, Axios, and React-router-dom for the routes.
