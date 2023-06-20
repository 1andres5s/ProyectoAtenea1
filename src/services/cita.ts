import { Cita } from "../interfaces/cita.interface";
import ItemModel from "../model/citas";


const inserCit = async (item:Cita)=>{
    const responseIsert =await ItemModel.create(item);
    return responseIsert
};

const getCits = async ()=>{
    const resposeItem = await ItemModel.find({})
    return resposeItem
}
const getCit = async (id:string)=>{
    const resposeItem = await ItemModel.findOne({_id:id})
    return resposeItem
}
const updateCit = async (id:string,data:Cita)=>{
    const resposeItem = await ItemModel.findOneAndUpdate({_id:id},data,{new:true})
    return resposeItem
}
const deleteCit = async (id:string)=>{
    const resposeItem = await ItemModel.findOneAndDelete({_id:id})
    return resposeItem
}
export {inserCit, getCits, getCit, updateCit ,deleteCit};