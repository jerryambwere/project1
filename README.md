# Game Deals Display

## Learning Goals

Design and architect features across a frontend
Communicate and collaborate in a technical environment
Integrate JavaScript and an external API
Debug issues in small- to medium-sized projects
Build and iterate on a project MVP

## requirements

Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIsLinks to an external site.. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

Use at least 3 distinct event listenersLinks to an external site. (3 events of different types) that enable interactivity. What this means is that, if you had 3 click events, that would only count as 1 distinct event and you would need to add at least 2 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

## project description

This project demonstrates how to fetch and display game deals from the CheapShark API using JavaScript and dynamically update the DOM.
Overview

The JavaScript code retrieves game deals with a sale price of $15 or less from the CheapShark API. Each game deal is displayed as a list item (<li>) containing an image, title, deal rating, release date, internal name, sale price, and a purchase button.
Technologies Used

    JavaScript
    HTML
    CSS

## Installation

No installation is required to run this code snippet in a web browser. Simply include the provided HTML, CSS, and JavaScript in your project.
Usage

    Fetch Game Deals: The code initiates a fetch request to the CheapShark API (https://www.cheapshark.com/api/1.0/deals?upperPrice=15).

    Display Game Deals: Upon receiving the API response, the code loops through each game deal data and dynamically creates HTML elements to display the game's details.

    Event Handling: Each dynamically created "Purchase" button has an event listener attached to it. When clicked, it triggers an alert confirming the purchase.

## Authors

This project was designed by

**Melvine Jerry Ambwere**

the project is live at
# project1
