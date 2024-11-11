import { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD

const connectDB = async () => {
    try {
        await connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.a1uva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Conected to mongoDB Cluster successfully...🚀🚀")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;