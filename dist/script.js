// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const port = 3000;

// // Middleware to parse JSON data from requests
// app.use(bodyParser.json());

// // Load the RSVP data from the JSON file
// let rsvpData = JSON.parse(fs.readFileSync('guestAttendance.json'));

// // Handle POST requests to add new RSVPs
// app.post('/rsvp', (req, res) => {
//   const newGuest = req.body;

//   // Add the new guest to the RSVP data
//   rsvpData.guests.push(newGuest);

//   // Save the updated RSVP data to the JSON file
//   fs.writeFileSync('rsvps.json', JSON.stringify(rsvpData));

//   res.json({ message: 'RSVP received successfully!' });
// });

// // Serve the RSVP data
// app.get('/rsvps', (req, res) => {
//   res.json(rsvpData);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
