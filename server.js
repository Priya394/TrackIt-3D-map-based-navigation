const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // For hashing passwords
const mysql = require('mysql2'); // MySQL client
const path = require('path'); // For handling file paths

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public'))); // Ensure route.html is in the 'public' folder

// MySQL Connection Setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Bhavika@2976', // Replace with your MySQL password
    database: 'trackit_db' // Your database name
});

// Check if MySQL connection is successful
db.connect((err) => {
    if (err) {
        console.error('Failed to connect to the database:', err.message);
        process.exit(1); // Exit the application if the DB connection fails
    }
    console.log('Connected to the MySQL database');
});

// Handle the signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the email and hashed password into the MySQL database
        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        await db.promise().execute(query, [email, hashedPassword]);

        console.log('User signed up successfully');

        // Respond with a success status and redirect info
        res.status(201).json({ message: 'User created successfully', redirectTo: '/route.html' });
    } catch (err) {
        console.error('Error inserting data into the database:', err);
        return res.status(500).json({ message: 'Error saving user data.' });
    }
});

// Handle the login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Check if the user exists
        const [users] = await db.promise().query(
            'SELECT email, password FROM users WHERE email = ?',
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const user = users[0];

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            console.log('User logged in successfully');
            // Respond with success and redirection info
            res.status(200).json({ message: 'Login successful', redirectTo: '/route.html' });
        } else {
            res.status(401).json({ message: 'Invalid email or password.' });
        }
    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).json({ message: 'Internal server error during login.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
