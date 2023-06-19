import "dotenv/config"
import {connect} from "mongoose"
//const mongoose = require("mongoose")



async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    //mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    await connect(DB_URI);
    
}


export default dbConnect;