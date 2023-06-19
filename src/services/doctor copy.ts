import { Cita } from "../interfaces/cita.interface";
import ItemModel from "../model/item";


const inserCar = async (item:Car)=>{
    const responseIsert =await ItemModel.create(item);
    return responseIsert
};

const getCars = async ()=>{
    const resposeItem = await ItemModel.find({})
    return resposeItem
}
const getCar = async (id:string)=>{
    const resposeItem = await ItemModel.findOne({_id:id})
    return resposeItem
}
const updateCar = async (id:string,data:Car)=>{
    const resposeItem = await ItemModel.findOneAndUpdate({_id:id},data,{new:true})
    return resposeItem
}
const deleteCar = async (id:string)=>{
    const resposeItem = await ItemModel.findOneAndDelete({_id:id})
    return resposeItem
}
export {inserCar, getCars, getCar, updateCar ,deleteCar};