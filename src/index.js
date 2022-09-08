/** @format */

const express = require("express");
const connectDB = require("./utils/dbConnect");
const app = express();
const Blog = require("./models/blogSchema");

app.get("/start", (req, res) => {
	res.status(200).json({ message: "Hello World!" });
});

app.use(express.json());

const createBlog = async (req, res) => {
	const { title, body } = req.body;
	try {
		await Blog.create({
			title: title,
			body: body,
		});
		res.status(201).json({ message: "Blog Post Created" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "An error occured" });
	}
};

app.post("/blog", createBlog);

//GET BLOG POSTS BELOW
const getBlog = async (req, res) => {
	try {
		const blogContent = await Blog.find();
		res.status(201).json({ message: "Request Successful", blogContent });
	} catch (error) {
		console.log(error);
	}
};
app.get("/blog", getBlog);

//GET POST

const getOnePost = async (req, res) => {
	const id = req.params.id;
	try {
		const blog = await Blog.findOne({
			_id: id,
		});
		res.status(201).json({ message: "succesful", blog });
	} catch (error) {
		console.log(error);
	}
};
app.get("/blog/:id", getOnePost);

app.listen(3000, () => {
	console.log("connecting to database");
	connectDB();
});
//mongodb+srv://franklin:12345@cluster0.xcjqq5v.mongodb.net/?retryWrites=true&w=majority
