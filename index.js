import Express from "express";
import dotenv from "dotenv";
import articleRoutes from "./routes/article.js";
import bloggerRoutes from "./routes/blogger.js";
import { connectDB } from "./config/connection.js";
import Article from "./models/article.js";
import Blogger from "./models/blogger.js";

// Load environment variables
dotenv.config();

// Create a new Express application
const app = new Express();

app.use(Express.json());

app.use(articleRoutes);
app.use(bloggerRoutes);

connectDB();

try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on ${port}!`));
}catch(err){
    console.log(err);
}
