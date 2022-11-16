const express = require("express")
const multer = require("multer")
const path = require("path")
// const cors = require("cors")
const app = express()

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

const upload = multer({ storage: storage })


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