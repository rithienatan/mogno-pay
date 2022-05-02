/**
 * Mogno Pay API web service
 * 
 * @version 1.0.0
 */
//---------- imports ----------
const express = require("express");
const cors = require("cors");

//---------- Custom imports ----------
const GenerateHash = require("./aux-functions/GenerateHash");
const { InsertUser, SearchUser } = require("./db-connect/DatabaseFunctions");
const res = require("express/lib/response");

//---------- configs -----------
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//---------- routes ----------
app.get("/", (req, res) => res.json("Api created for product MognoPay!"));

app.post("/getHash", (req, res) => {
    return res.json({
        "hash": GenerateHash(req.body.name),
        "statusCode": 200
    });
});

app.post("/createUser", (req, res) => {
    InsertUser(req.body);

    return res.json({
        "message": "insert sucessful",
        "statusCode": 200
    });
});

app.post("/searchUser", async (req, res) => {
    const object = await SearchUser(req.body);

    if(object === null)
    {
        return res.json({
            "message": "User not found in database!",
            "statusCode": 404
        });
    }
    else
    {
        return res.json({
            "object": object,
            "statusCode": 200
        });
    }//end if
});

//----------Start server ----------
app.listen(PORT, () => console.log(`Server started on port - ${PORT}`));