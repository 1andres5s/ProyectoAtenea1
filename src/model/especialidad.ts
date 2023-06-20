import {Schema,Types,model,Model, version} from "mongoose"
import { Especialidad } from "../interfaces/especialidad.interface"


const ItemSchema = new Schema<Especialidad>(
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
const ItemModel = model('especialidad',ItemSchema)
export default ItemModel