
const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search')
const verifyTokenAndRole = require("../middleware/authentication");




// Apply the verifyTokenAndRole middleware to restrict access to these routes
router.use(verifyTokenAndRole)

router.get('/search-username',searchController.getGithubRepositoryByUsername);

module.exports = router;