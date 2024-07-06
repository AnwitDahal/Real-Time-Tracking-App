# Real Time Tracking App

This project is a real-time tracking application that uses Node.js, Express, Socket.IO, and Leaflet for displaying the real-time positions of users on a map. It leverages geolocation to track and update user positions.

## Features

- Real-time location tracking using geolocation.
- Display of user positions on a Leaflet map.
- Dynamic updating of positions as users move.
- Automatic removal of markers when users disconnect.

## Technologies Used

- Node.js
- Express
- Socket.IO
- Leaflet
- EJS (Embedded JavaScript templates)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/real-time-tracking-app.git
   cd real-time-tracking-app
   ```
2. Install dependencies:

   ```sh
   npm install
   ```
   
3. Run the server:

   ```sh
   node index.js
   ```
   
4. Open your browser and navigate to `http://localhost:3000`.

## Files

### index.js
This is the main server file. It sets up the Express server, configures Socket.IO, and serves the static files and EJS template.

### script.js
This file handles the client-side JavaScript. It initializes the map, handles geolocation, and manages real-time communication with the server using Socket.IO.

### index.ejs
This is the main HTML template file, which includes the necessary stylesheets and scripts for Leaflet and Socket.IO.

## Usage
When a user visits the application, their current location is tracked using the Geolocation API.
The location data is sent to the server via Socket.IO.
The server broadcasts the location data to all connected clients.
The clients update the positions of users on the map in real-time.
 
