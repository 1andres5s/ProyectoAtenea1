import { Especialidad } from "../interfaces/especialidad.interface";
import ItemModel from "../model/especialidad";


const inserEspecial = async (item:Especialidad)=>{
    const responseIsert =await ItemModel.create(item);
    return responseIsert
};

const getEspecials = async ()=>{
    const resposeItem = await ItemModel.find({})
    return resposeItem
}
const getEspecial = async (id:string)=>{
    const resposeItem = await ItemModel.findOne({_id:id})
    return resposeItem
}
const updateEspecial = async (id:string,data:Especialidad)=>{
    const resposeItem = await ItemModel.findOneAndUpdate({_id:id},data,{new:true})
    return resposeItem
}
const deleteEspecial = async (id:string)=>{
    const resposeItem = await ItemModel.findOneAndDelete({_id:id})
    return resposeItem
}
export {inserEspecial, getEspecials, getEspecial, updateEspecial ,deleteEspecial};