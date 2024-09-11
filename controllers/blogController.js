const Blog = require('../models/Blog');

exports.addBlog = async (req, res) => {
    const { title, content } = req.body;
    try {
        const blog = new Blog({
            title,
            content,
            author: req.user.id
        });
        await blog.save();
        res.redirect('/blogs');
    } catch (err) {
        res.status(500).send('Error adding blog');
    }
};

exports.listBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1 });
        res.render('listBlogs', { blogs });
    } catch (err) {
        res.status(500).send('Error retrieving blogs');
    }
};
