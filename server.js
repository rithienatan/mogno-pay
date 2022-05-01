const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => res.json("Hello From AWS Beanstalk..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));