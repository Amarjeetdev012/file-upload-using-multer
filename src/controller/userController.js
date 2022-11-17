const userModel = require("../model/userModel")

const registerUser = async (req, res) => {
    try {
        let data = req.body
        const { name, mobileNumber, email, password } = data
        if (!name) {
            return res.status(400).send({ status: false, message: " please provide name " })
        }
        if (!mobileNumber) {
            return res.status(400).send({ status: false, message: "please provide mobileNumber" })
        } if (!email) {
            return res.status(400).send({ status: false, message: "please provide email" })
        } if (!password) {
            return res.status(400).send({ status: false, message: "please provide password" })
        }
        return res.status(201).send({ status: true, message: "user register successfully", data: data })
    }
    catch (error) {
        res.status(500).send({ status: false, message: `${error.message}` })
    }
}

const loginUser = async (req, res) => {
    try {
        let data = req.body
        let { email, password } = data
        if (!email) {
            return res.status(400).send({ status: false, message: "please provide email" })
        }
        if (!password) {
            return res.status(400).send({ status: false, message: "please provide password" })
        }
        return res.status(200).send({ status: true, message: "user login successfully", data: data })
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    catch (error) {
        res.status(500).send({ status: false, message: `${error.message}` })
    }
}

module.exports = { registerUser, loginUser }