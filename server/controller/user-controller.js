/** @format */

import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import Token from '../model/Token.js';

dotenv.config()

export const SignUpUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
        email: req.body.email,
        name: req.body.name,
      password: hashedPassword,
    };
    console.log(user);

    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({ msg: 'Signup successfull' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Error while signing up user' });
  }
};

export const loginUser = async (req,res) =>{
    const user = await User.findOne({email:req.body.email})
    
    if (!user) {
        return res.status(400).json({msg:'username is not exist'})
        
    }
    
    try {
        let match = await bcrypt.compare(req.body.password,user.password)
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_KEY, {expiresIn : '15m'})
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_KEY)
            
            const newToken = new Token({token:refreshToken})
            await newToken.save()
            console.log(user)

            res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,name: user.name, username: user.email})

            
        } else {
            res.status(400).json({msg:'password not match'})
            
        }
    } catch (error) {
        res.status(500).json({ msg: 'error while login the user' })
        
    }

}
