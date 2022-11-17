const express = require("express")
// const cors = require("cors")
const multer = require("multer")
const path = require("path")
// const mongoose = require("mongoose")
const route = require("./src/route/route")



const app = express()
app.use(express.json())
// app.use(cors())

app.use("/", route)
const storageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname)
    }
})


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "style.css"))
})

const upload = multer({ storage: storageEngine })


app.get("/message", (req, res) => {
    res.send("<h1> coming from h1 some html</h1> <h2> coming from h2 some html</h2><h3> coming from h3 some html</h3><h4> coming from h4 some html</h4><h5> coming from h5 some html</h5><h6> coming from h6 some html</h6> <p> this is from paragraph tag </ p>")
})

app.post("/single", upload.single("image"), (req, res) => {
    console.log(req.file)
    res.send(`single file ${req.file.originalname} upload succesfully`)
})

app.post("/multiple", upload.array("images", 5), (req, res) => {
    console.log(req.files)
    res.send(`multiple files upload succesfully`)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})


app.get("/test1", (req, res) => {
    res.sendStatus(200); // equivalent to res.status(200).send('OK')
    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
    res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
})

// jsonp callback support
app.get("/test2", (req, res) => {
    // res.jsonp(null);
    // res.jsonp({ user: 'tj' });
    //   res.status(500).jsonp('oh noes!');
    res.status(404).jsonp('I dont have that');
})

// Send JSON response.

app.get("/test3", (req, res) => {
    res.json(null);
    // res.json({user:"tj"})
    // res.status(500).json('oh noes!');
    res.status(404).json('I dont have that');

})
app.get("/test4", (req, res) => {
    res.links({
        next: 'http://api.example.com/users?page=2',
        last: 'http://api.example.com/users?page=5'
    });
})

app.get("/test5", (req, res) => {
    // res.send(new Buffer('wahoo'));
    // res.send({ some: 'json' });
    // res.send('<p>some html</p>');
    res.status(404).send('Sorry, cant find that');
})

app.get("/test6", (req, res) => {
    // res.redirect('index.html');
    // res.redirect('back');
    // res.redirect('/foo/bar');
    // res.redirect('http://example.com');
    // res.redirect(200, 'http://example.com');
    // res.redirect('http://example.com', 301);
    res.redirect('../login'); // /blog/post/1 -> /blog/login

})



