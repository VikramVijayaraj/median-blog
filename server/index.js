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
