const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res) => {
  try {
    const { name, email, company, phone, password } = req.body;

    // 1. Check if user exists
    const userCheck = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: "User already exists with this email." });
    }

    // 2. Hash password and insert into DB
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertQuery = `
      INSERT INTO users (name, email, company, phone, password)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, name, email, company;
    `;
    const newUserResult = await db.query(insertQuery, [name, email, company, phone, hashedPassword]);
    const newUser = newUserResult.rows[0];

    // 3. Issue Token
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // 4. Send Email Alert
    const emailHtml = `
      <h3>New User Registration Alert</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
    `;
    await sendEmail("ALERT: New User Registered on CRYONANO", emailHtml);

    res.status(201).json({ token, user: newUser });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ message: "Server error during registration." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Fetch user
    const userResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    const user = userResult.rows[0];

    // 2. Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // 3. Issue Token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // 4. Send Email Alert
    const emailHtml = `
      <h3>User Datasheet Access Notification</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Company:</strong> ${user.company || 'N/A'}</p>
      <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
    `;
    await sendEmail("ALERT: User Login Activity", emailHtml);

    delete user.password;
    res.json({ token, user });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error during login." });
  }
};