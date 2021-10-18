import express from 'express'
import env from 'dotenv'
import dbConnect from './config/db.js';
import colors from 'colors'
import productRoute from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleWare/errorMiddleware.js'


env.config()
dbConnect(process.env.MONGO_URI);

const app = express();
app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoute)

app.use(notFound);

app.use(errorHandler);


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.underline)
})