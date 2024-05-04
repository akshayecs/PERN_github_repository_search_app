const express = require('express');
const userRoutes = require('./user');
const searchRoute = require('./search');
const connectDatabase = require('../middleware/connectDB');
// const verifyTokenAndRole = require("../middleware/authentication");

const router = express.Router();

// Apply the connectDatabase middleware to all routes in this file
// router.use(connectDatabase);

router.use('/user',connectDatabase,userRoutes)



// Mount customer routes under /customer endpoint
router.use('/api',searchRoute);

module.exports = router;