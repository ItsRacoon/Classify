const express = require('express');
const { authenticate, authorize } = require('../middlewares/auth');
const router = express.Router();

// Admin Dashboard
router.get('/dashboard', authenticate, authorize(['teacher']), (req, res) => {
    res.status(200).json({ message: 'Welcome to the Teacher Dashboard' });
});

module.exports = router;
