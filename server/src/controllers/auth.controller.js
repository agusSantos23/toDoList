
import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import { createdAccessToken } from '../libs/jwt.js'

import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const register = async (req,res) =>{

    const {email, username, password} = req.body
    
    try {
        const userFound = await User.findOne({email})
        if(userFound) return res.status(400).json(["The email is already in use"])

        const passwordHash = await bcrypt.hash(password,10)

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })

        const userSaved = await newUser.save()

        const token = await createdAccessToken({
            id: userSaved._id,
            nameuser: userSaved.username,
            email: userSaved.email
        })

        res.cookie('token',token)
        res.json(newUser)

    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const login = async (req,res) =>{
    
    const {email, password} = req.body
    

    try {

        const userFound = await User.findOne({email})

        if(!userFound) return res.status(400).json(["User not found"])


        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json(["Incorrect password"])

        
        


        const token = await createdAccessToken({
            id: userFound._id,
            nameuser: userFound.username,
            email: userFound.email
        })

        res.cookie('token',token)
        res.json({
            message: "User correct"
        })



    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export const logout = (req,res) =>{

    res.cookie('token',"", {
        expires: new Date(0)
    })

    return res.sendStatus(200)
}

export const profile = (req,res)=>{

    if(!userFound) return res.status(400).json(["User not found"])

    res.json(req.user)
}

export const verifyToken = async (req,res) => {
    const {token} = req.cookies

    if(!token) return res.status(401).json(["Unauthorized"])
    
    jwt.verify(token, TOKEN_SECRET, async (err, user)=>{
        if(err) return res.status(401).json(["Unauthorized"])

        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json(["Unauthorized"])

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    })

}