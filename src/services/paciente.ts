import { Paciente } from "../interfaces/paciente.interface";
import ItemModel from "../model/item";


const inserPacient = async (item:Paciente)=>{
    const responseIsert =await ItemModel.create(item);
    return responseIsert
};

const getPacients = async ()=>{
    const resposeItem = await ItemModel.find({})
    return resposeItem
}
const getPacient = async (id:string)=>{
    const resposeItem = await ItemModel.findOne({_id:id})
    return resposeItem
}
const updatePacient = async (id:string,data:Paciente)=>{
    const resposeItem = await ItemModel.findOneAndUpdate({_id:id},data,{new:true})
    return resposeItem
}
const deletePacient = async (id:string)=>{
    const resposeItem = await ItemModel.findOneAndDelete({_id:id})
    return resposeItem
}
export {inserPacient, getPacients, getPacient, updatePacient ,deletePacient};