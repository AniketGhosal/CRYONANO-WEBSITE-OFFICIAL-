// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const authRoutes = require('./src/routes/authRoutes');
// const formRoutes = require('./src/routes/formRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/forms', formRoutes);

// // Health Check
// app.get('/', (req, res) => {
//   res.send('CRYONANO Backend API is running.');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });







require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const formRoutes = require('./src/routes/formRoutes'); // <--- ADD THIS

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/forms', formRoutes); // <--- ADD THIS

// Health Check
app.get('/', (req, res) => {
  res.send('CRYONANO Backend API is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});