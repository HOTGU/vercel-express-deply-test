import express from "express";
import path from "path";

const app = express();
const PORT = 4000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.listen(PORT || 4000, () => {
    console.log("hello Server");
});

export default app;
