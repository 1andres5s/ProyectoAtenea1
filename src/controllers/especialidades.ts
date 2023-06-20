import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import {inserEspecial, getEspecials, getEspecial, updateEspecial ,deleteEspecial } from "../services/especialidad";

const getEspecialidad= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await getEspecial(id);
        const data = response ? response: "NOT_FOUD"
        res.send(data)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }

} 

const getEspecialidades= async(req:Request, res: Response)=>{
    try {
        const response = await getEspecials()
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }
}

const updateEspecialidad= async({params,body}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await updateEspecial(id,body);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }

} 

const postEspecialidad=async({body}:Request, res: Response)=>{
    try {
        const responseCitas = await inserEspecial(body);
        res.send(responseCitas)
    } catch (error) {
        handleHttp(res,"ERROR_POST_CITAS", error);
    }
}

const deleteEspecialidad= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await deleteEspecial(id);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_CITAS");
    }

} 

export{ deleteEspecialidad, getEspecialidad, getEspecialidades, postEspecialidad, updateEspecialidad}