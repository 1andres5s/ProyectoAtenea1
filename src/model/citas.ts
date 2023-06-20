import {Schema,Types,model,Model, version} from "mongoose"
import { Doctor } from "../interfaces/doctor.interface"


const ItemSchema = new Schema<Doctor>(
    {
        nombre:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true,
        versionKey:false,

    }
)
//model(nombre en la bd, schema)
const ItemModel = model('citas',ItemSchema)
export default ItemModel