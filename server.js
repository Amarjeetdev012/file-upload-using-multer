const express = require("express")
// const cors = require("cors")
const multer = require("multer")
const path = require("path")
// const mongoose = require("mongoose")



const app = express()
app.use(express.json())
// app.use(cors())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname)
    }
})


app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "style.css"))
})

const upload = multer({ storage: storage })


app.get("/message", (req,res) => {
    res.json({message:"Hello from Server!"})
})

app.post("/single", upload.single("image"), (req, res) => {
    console.log(req.file)
    res.send("single file upload succesfully")
})


app.post("/multiple", upload.array("images", 5), (req, res) => {
    console.log(req.files)
    res.send("multiple file upload succesfully")
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})