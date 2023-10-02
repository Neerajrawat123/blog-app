import User from "../model/user"

export const SignUpUser = async (req,res) =>{
try {
    const user = req.body

    const newUser = User(user)
    await newUser.save();

    return response.status(200).json({ msg: 'Signup successfull' });
    
} catch (error) {
    return response.status(500).json({ msg: 'Error while signing up user' });
}
}