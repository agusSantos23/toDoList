
import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'
import { createdAccessToken } from '../libs/jwt.js'


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

        if(!userFound) return res.status(400).json({message: "User not found"})


        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(400).json({message: "Incorrect password"})

        
        


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

    

    res.json(req.user)
}