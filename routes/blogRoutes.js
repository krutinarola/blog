const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/add-blog', authMiddleware, (req, res) => res.render('addBlog'));
router.post('/add-blog', authMiddleware, blogController.addBlog);

router.get('/blogs', blogController.listBlogs);

module.exports = router;
