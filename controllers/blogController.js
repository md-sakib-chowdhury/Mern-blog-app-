
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
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        //validation
        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: "Please Provide All Fields",
            });
        }
        const newBlog = new blogModel({ title, description, image });
        await newBlog.save();
        return res.status(201).send({
            success: true,
            message: "Blog Created!",
            newBlog,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error WHile Creting blog",
            error,
        });
    }
};

//Update Blog
exports.updateBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
        const blog = await blogModel.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        return res.status(200).send({
            success: true,
            message: "Blog Updated!",
            blog,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error WHile Updating Blog",
            error,
        });
    }
};

//SIngle Blog
exports.getBlogByIdController = () => { };

//Delete Blog
exports.deleteBlogController = () => { };