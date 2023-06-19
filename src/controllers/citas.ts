import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { inserCit, getCits, getCit, updateCit ,deleteCit } from "../services/cita";

const getCita= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await getCit(id);
        const data = response ? response: "NOT_FOUD"
        res.send(data)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }

} 

const getCitas= async(req:Request, res: Response)=>{
    try {
        const response = await getCits()
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }
}

const updateCita= async({params,body}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await updateCit(id,body);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }

} 

const postCita=async({body}:Request, res: Response)=>{
    try {
        const responseCitas = await inserCit(body);
        res.send(responseCitas)
    } catch (error) {
        handleHttp(res,"ERROR_POST_CITAS", error);
    }
}

const deleteCita= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await deleteCit(id);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }

} 

export{getCita,getCitas,postCita,updateCita,deleteCita}