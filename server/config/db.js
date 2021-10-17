import mongoose from "mongoose";

async function dbConnect(uri){
    try{
        const conn = await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connection: ${conn.connection.host}`.cyan.underline)
    }catch(err){
        console.log(`Error Connecting: ${err.message}`.red)
        process.exit(1)
    }
}

export default dbConnect