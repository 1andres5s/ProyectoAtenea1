import { Request, Response, Router } from "express";
import { deletePaciente, getPaciente, getPacientes, postPaciente, updatePaciente } from "../controllers/pacientes";

const router = Router()

/*
http://localhost:3002/Pacientes  [GET]
*/


router.get('/', getPacientes)
router.get('/:id', getPaciente)
router.post('/', postPaciente)
router.put('/:id', updatePaciente)
router.delete('/:id', deletePaciente)



export{router};

