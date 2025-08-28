import mongoose from 'mongoose'


export const dbConnect = async ()=>{
    try {
        const URI = process.env.MONGODB_URI
        const res = await mongoose.connect(URI)
        console.log(`Database connected successfully , ${res.connections[0].host}`);
        
    } catch (error) {
        process.exit(1);
    }
}