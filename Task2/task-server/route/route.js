// const {Router} = require("express")
const express = require("express")
const {getdata, postData, deletedData} = require("../Controllers/taskController")
const route = express.Router()

route.get("/", (req,res)=>{
    res.send("I am from router...")
})

route.get("/get-data", getdata)
route.post("/post-data", postData)
route.delete("/delete-data/:id", deletedData)



module.exports = route