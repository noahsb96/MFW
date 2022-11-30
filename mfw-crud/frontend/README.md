## App description

A website for the metal band "Mouth For War" where the admin can add, edit, show and delete merch. You can also look at tour dates, photos, videos, music, about and contact page. The user can also buy merch from the website and become a number 1 fan.

## Technologies Used

MERN stack used. MongoDB and mongoose for database, Express, NodeJS and ReactJS

## Installation Steps

Clone the frontend and backend repo, run npm i on the backend and the frontend. You must have an env for both the frontend and the backend. The backend env must have the MongoDB_URI, the backend port number, a session secret, a frontend port number, and the client secret and client id for the bandsintown API. The frontend env just has the port number for the backend port number and the frontend port number. Then run nodemon on the backend terminal and npm start on the frontend terminal.

## User Stories

As a user I want to see a professional looking webpage for my favorite band that has all the information I need to know everything about them

As a user I want to see an online store on the website so I can purchase the band's merchandise and show all my friends

As a user I want to see a calendar of the band's upcoming shows so I can support them live

As a user I want to see a page that holds all of the band's music so I can listen to them wherever I'm at

As a user I want to see a page for all the band's photos so I can put name to song and see what the band members look like

As a user I want to have an account on this website so I can have all my information saved for faster checkout times if I'm buying merch and to get updates on the band

As a band I want to have a website that holds all the information a fan will need to be able to support my art

As a band I want to add, update and delete(hopefully not)upcoming shows so people know when we are coming to their city so they can see us

As a band I want to add, update and delete(again, hopefully not) my merch so people can increase our revenue and support my art

As a band, I want to add, update and delete(Once more, hopefully not) the songs on my webpage so fans can get current discography and support my art

As a band, I want to add, update and delete photos so people can put music to face so they know what the band looks like in real life

As a band I want to be able to give fans current updates and news about what we have coming up as far as merch, shows and music go so the fans can stay up to date

## Wireframes

<img width="1018" alt="a7bf24c1-1cf8-4e2d-9f30-1140322ccb6c" src="https://user-images.githubusercontent.com/105397451/204674144-76240cf2-b4df-43b8-ae8f-0b81a6e0e98a.png">
<img width="1020" alt="abe48fe4-8e50-4f85-ae30-df04278725bd" src="https://user-images.githubusercontent.com/105397451/204674147-7c65ed24-5a8c-4072-b0b0-a7316e329989.png">
<img width="1022" alt="b2f98a88-9eab-4e83-bf45-4c24bafce362" src="https://user-images.githubusercontent.com/105397451/204674152-8201dae4-adec-4a22-87ae-796d305a13fb.png">
<img width="1015" alt="d87178b5-1a33-43fd-b837-df0e9a7d6a9e" src="https://user-images.githubusercontent.com/105397451/204674153-3327e7ce-de30-4420-a68c-685ae2441327.png">
<img width="1015" alt="ea4848fd-3532-43c1-bd0e-677e7e3300c1" src="https://user-images.githubusercontent.com/105397451/204674155-2783c5ae-6691-4d90-a22d-b4d8d350ffec.png">
<img width="1023" alt="7e68621d-cd2c-48e8-b6c3-d76eface643e" src="https://user-images.githubusercontent.com/105397451/204674157-e86ae419-1a0b-4c6d-93ed-6c3ad56b661e.png">
<img width="1018" alt="35f232af-8c28-4666-a509-0075c0f48b8e" src="https://user-images.githubusercontent.com/105397451/204674159-95592f31-e805-403c-b1d4-b06a48d436ed.png">
<img width="1021" alt="39f6cf26-c215-4b5f-8287-ea4c398ce062" src="https://user-images.githubusercontent.com/105397451/204674162-9ec8e870-1d3b-4c7b-8f67-0d5a95acb3db.png">

## Unsolved Problems and Future Features

I will be implementing a checkout button to buy merch on the webpage and I will be rendering this data with Shopify Hydrogen. I will also be adding a login button so we can log in to your shopify account and buy products from Shopify. Also adding an actual merch page to show all the merch that is available to buy.

## API's

Used the Bandsintown API to render the show dates for the band that are listed on the band's Bandsintown account. Access is fetched from the a get request to the bandsintown API with a link to the band's Bandsintown URL, specified for events with a client id added to the end of the url. When this data is fetched, you should be able to receive a json response with the event data.
