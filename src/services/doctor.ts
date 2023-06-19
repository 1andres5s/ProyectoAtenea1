import { Doctor } from "../interfaces/doctor.interface";
import ItemModel from "../model/item";


const inserDoc = async (item:Doctor)=>{
    const responseIsert =await ItemModel.create(item);
    return responseIsert
};

const getDocs = async ()=>{
    const resposeItem = await ItemModel.find({})
    return resposeItem
}
const getDoc = async (id:string)=>{
    const resposeItem = await ItemModel.findOne({_id:id})
    return resposeItem
}
const updateDoc = async (id:string,data:Doctor)=>{
    const resposeItem = await ItemModel.findOneAndUpdate({_id:id},data,{new:true})
    return resposeItem
}
const deleteDoc = async (id:string)=>{
    const resposeItem = await ItemModel.findOneAndDelete({_id:id})
    return resposeItem
}
export {inserDoc, getDocs, getDoc, updateDoc ,deleteDoc};