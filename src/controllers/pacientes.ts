import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { getPacients, inserPacient, getPacient, updatePacient,deletePacient } from "../services/paciente";

const getPaciente= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await getPacient(id);
        const data = response ? response: "NOT_FOUD"
        res.send(data)
    } catch (error) {
        handleHttp(res,"ERROR_GET_PACIENTE");
    }

} 

const getPacientes= async(req:Request, res: Response)=>{
    try {
        const response = await getPacients()
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_PACIENTE");
    }
}

const updatePaciente= async({params,body}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await updatePacient(id,body);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_PACIENTE");
    }

} 

const postPaciente=async({body}:Request, res: Response)=>{
    try {
        const responsePaciente = await inserPacient(body);
        res.send(responsePaciente)
    } catch (error) {
        handleHttp(res,"ERROR_POST_PACIENTE", error);
    }
}

const deletePaciente= async({params}:Request, res: Response)=>{
    try {
        const {id} = params
        const response = await deletePacient(id);
        res.send(response)
    } catch (error) {
        handleHttp(res,"ERROR_GET_PACIENTE");
    }

} 

export{getPaciente,getPacientes,postPaciente,updatePaciente,deletePaciente}