import express from 'express'
import connectDB from './db/db'
import router from './routes/routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Ping the database
connectDB()


//Every app based route will use the /api endpoint
app.get("/api", (req, res) => {
    res.send("Welcome")
})
app.use("/api", router)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}...🚀🚀🚀`)
})
