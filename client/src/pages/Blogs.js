import React, { useState, useEffect } from "react";
import axios from 'axios';
import BlogCard from "../components/BlogCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    // get blogs
    const getAllBlogs = async () => {
        try {
            const response = await axios.get('/api/v1/blog/all-blog');
            if (response?.data?.success) {
                setBlogs(response?.data?.blogs);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllBlogs();
    }, []);

    return (
        <div>
            <BlogCard />
        </div>
    );
};

export default Blogs; 