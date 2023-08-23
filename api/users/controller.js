require('dotenv').config()
const User = require('./modal')
const { connect } = require('mongoose')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')


const Dummy = (req, res) => {
    res.json({
        user: "BQ " + req.body.user
    })
}

const SignUp = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        await connect(process.env.MONGO_URI)
        // console.log("DB CONNECTED")

        
    const existingUser = await User.exists({ email: email })
        if (existingUser) {
            res.status(208).json({
                message: "User Already Exists"
            })
        }
        else {
            await User.create({ username, email, password: await hash(password, 12)})
            res.json({
                message: "done"
            })
        }

    //     else {
    //         await User.create({ username, email, password })
    //         console.log("User Created")
    //         res.status(201).json({
    //             message: "Signup Successfully"
    //         })
    //     }

        

    }
    catch (error) {
        res.json({
            message: "error"
        })

    }


    // const existingUser = await User.exists({ email: email })
    //     if (existingUser) {
    //         res.status(208).json({
    //             message: "User Already Exists"
    //         })
    //     }

    //     else {
    //         await User.create({ username, email, password })
    //         console.log("User Created")
    //         res.status(201).json({
    //             message: "Signup Successfully"
    //         })
    //     }


    //     const existingUser = await User.exists({ email: email })
    //     if (existingUser) {
    //         res.status(208).json({
    //             message: "User Already Exists"
    //         })
    //     }

    //     else {
    //         await User.create({ username, email, password: await hash(password, 12) })
    //         console.log("User Created")
    //         res.status(201).json({
    //             message: "Signup Successfully"
    //         })
    //     }
    // }
    // catch (error) {
    //     res.json({
    //         message: "error"
    //     })
    // }
}

const Login = async (req, res) => {

    const { password, email } = req.body;

    try {
        await connect(process.env.MONGO_URI)
        const existingUserCheck = await User.findOne({ email: email })

                if (!existingUserCheck) {
                    res.status(404).json({
                        message: "User not found"
                    })
                }
                else {
                    const decryptPassword = await compare(password, existingUserCheck.password)
                    console.log(decryptPassword)
                    if (email == existingUserCheck.email && decryptPassword) {
                    const token = sign(
                    {
                        id: existingUser._id,
                        username: existingUser.username,
                        email: existingUser.email,
                        profile : existingUser.profile,
                        role : existingUser.role
                    }
                    ,
                    process.env.JWT_SECRET
                    )
                    res.status(200).json({
                        message : "success",
                        token: token
                    })
                    }
                    else {
                        res.json({
                            message : "invalid"
                        })
                    }





                }
        
    } 
    catch (error) {
        
    }
}
const allUsers = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const Users = await User.find()
        res.json(
            {
                Users: Users
            }
        )
    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )
    }
}
const getUserbyEmail = async (req, res) => {

    const { email } = req.params
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const Users = await User.findOne({ email: email })
        res.json(
            {
                Users: Users
            }
        )
    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
       )
    }
}
const userbyEmail = async (req, res) => {
    const { email } = req.query
    try {
        await mongoose.connect(process.env.MONGO_URI)
        const Users = await User.findOne({ email: email })
        res.json(
            {
                Users: Users
            }
        )

    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )
    }
}
module.exports = { Dummy, SignUp, Login, allUsers, getUserbyEmail, userbyEmail }