import {Schema,Types,model,Model, version} from "mongoose"
import { Doctor } from "../interfaces/doctor.interface"


const ItemSchema = new Schema<Doctor>(
    {
        color:{
            type:String,
            required:true,
        },gas:{
            type:String,
            enum:["gasoline","electric"],
            required:true,
        },year:{
            type:Number,
            required:true,
        },price:{
            type:Number,
            required:true,
        }
    },
    {
        timestamps:true,
        versionKey:false,

    }
)
//model(nombre en la bd, schema)
const ItemModel = model('items',ItemSchema)
export default ItemModel