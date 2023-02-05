import express from "express";

const app = express();
const PORT = 4000;

app.use("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(PORT || 4000, () => {
    console.log("hello Server");
});
