import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import Article from "./models/Article.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  const artilceList = await Article.find({});
  return res.json(artilceList);
});

app.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    return res.json(article);
  } catch {
    return res.json({ message: "Article Not Found!!" });
  }
});

app.post("/articles/write", async (req, res) => {
  const { title, desc, content } = req.body;
  const newArticle = new Article({
    author: "test",
    title: title,
    description: desc,
    content: content,
  });
  await newArticle.save();
  console.log(newArticle);
  return res.json({ article: newArticle, message: "New Article Created!" });
});

app.put("/articles/:id/edit", async (req, res) => {
  const { title, desc, content } = req.body;
  const { id } = req.params;
  const updatedArticle = {
    author: "test",
    title: title,
    description: desc,
    content: content,
  };
  await Article.findByIdAndUpdate(id, updatedArticle);
  res.json({ article: updatedArticle, message: "Article Updated!" });
});

app.delete("/articles/:id", async (req, res) => {
  const { id } = req.params;
  await Article.findByIdAndDelete(id);
  res.send("Article Deleted!!");
});

// Mongoose Connection
mongoose
  .connect(process.env.MongoDBConn)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(`Database connection failed: ${err}`));
