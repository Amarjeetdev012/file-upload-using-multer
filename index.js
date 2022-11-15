const express = require("express")
const multer = require("multer")
const app = express()
const path = require("path")
app.use(express.json())

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "uploads")
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "-" +Date.now() + ".jpg")
        }
    })
}).any()

app.post("/upload", upload, (req, res) => {
    res.send("file upload")

})


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`express is running on ${PORT}`))