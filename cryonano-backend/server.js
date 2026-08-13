// To running and testing website on local development server (localhost), you need to eneable this server.js block



// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const authRoutes = require('./src/routes/authRoutes');
// const formRoutes = require('./src/routes/formRoutes'); // <--- ADD THIS

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/forms', formRoutes); // <--- ADD THIS

// // Health Check
// app.get('/', (req, res) => {
//   res.send('CRYONANO Backend API is running.');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });















// To run the website on production server, you need to enable this server.js block

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // <--- ADDED for folder paths

const authRoutes = require('./src/routes/authRoutes');
const formRoutes = require('./src/routes/formRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (These must come before the React setup)
app.use('/api/auth', authRoutes);
app.use('/api/forms', formRoutes); 

// --- PRODUCTION FRONTEND SETUP ---
// Serve the static React files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// // Catch-all route: If the user visits any URL that isn't an API, show the React website
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });




// Catch-all route: If the user visits any URL that isn't an API, show the React website
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// ---------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});