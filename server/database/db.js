import mongoose from 'mongoose';

export const connection = async () => {
    const URL = 'mongodb://127.0.0.1:27017/mydatabase'

    try {
        await mongoose.connect(URL,{ useNewUrlParser: true })
        console.log('connection successfully')
        
    } catch (error) {
        console.log('error while connnectin database',error)
        
    }
}

