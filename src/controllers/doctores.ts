import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import {inserDoc, getDocs, getDoc, updateDoc ,deleteDoc} from "../services/doctor";

const getDoctor= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await getDoc(id);
        const data = response ? response: "NOT_FOUD"
        res.send(data)
    } catch (error) {
        handleHttp(res,"ERROR_GET_DOCTORES");
    }

} 

const getDoctores= async(req:Request, res: Response)=>{
    try {
        const response = await getDocs()
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_DOCTORES");
    }
}

const updateDoctor= async({params,body}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await updateDoc(id,body);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_DOCTORES");
    }

} 

const postDoctor=async({body}:Request, res: Response)=>{
    try {
        const responseDoctor = await inserDoc(body);
        res.send(responseDoctor)
    } catch (error) {
        handleHttp(res,"ERROR_POST_DOCTORES", error);
    }
}

const deleteDoctor= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await deleteDoc(id);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_DOCTORES");
    }

} 

export{getDoctor,getDoctores,postDoctor,updateDoctor,deleteDoctor}