const userModel = require("../model/userModel")

const registerUser = async (req,res) => {
try {
    let data = req.body
 const {name, mobileNumber, email, password} = data
if(!name) {
    return res.status()
}
 
} catch (error) {
    res.status(500).send({status:false, message:`${error.message}`})
}
}

module.exports = {
    registerUser
}