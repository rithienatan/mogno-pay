/**
 * Mogno Pay API web service
 * 
 * @version 0.2.0
 */
//---------- imports ----------
const express = require("express");
const cors = require("cors");

//---------- Custom imports ----------
const GenerateHash = require("./aux-functions/GenerateHash");

//---------- configs -----------
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

//---------- routes ----------
app.get("/", (req, res) => res.json("Api created for product MognoPay!"));

app.get("/getHash", (req, res) => {
    return res.json({
        "hash": req.params,
        "statusCode": 200
    });
});

//----------Start server ----------
app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));