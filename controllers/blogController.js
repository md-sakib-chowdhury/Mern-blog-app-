
const blogModel = require("../models/blogModel");

//GET ALL BLOGS
exports.getAllBlogsController = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        if (!blogs) {
            return res.status(200).send({
                success: false,
                message: "No Blogs Found",
            });
        }
        return res.status(200).send({
            success: true,
            BlogCount: blogs.length,
            message: "All Blogs lists",
            blogs,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error WHile Getting Blogs",
            error,
        });
    }
};

//Create Blog
exports.createBlogController = () => { };

//Update Blog
exports.updateBlogController = () => { };

//SIngle Blog
exports.getBlogByIdController = () => { };

//Delete Blog
exports.deleteBlogController = () => { };