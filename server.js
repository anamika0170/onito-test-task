const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./db')
const bodyParser = require('body-parser');
const cors = require('cors')

const routes = require('./routes');
dotenv.config()

const app = express()
app.use(cors())

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('Welcome')
})

app.use('/api', routes);

const PORT=5000
const startServer = async()=>{
    try {
       await connectDb()
        await app.listen(PORT,()=>{
            console.log(`server started at port ${PORT || process.env.MONGO_URL}`)
        })
    } catch (error) {
        console.log("Error:",error)
    }
}

startServer()