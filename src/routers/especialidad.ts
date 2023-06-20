import { Request, Response, Router } from "express";
import { deleteEspecialidad, getEspecialidad, getEspecialidades, postEspecialidad, updateEspecialidad } from "../controllers/especialidades";

const router = Router()

/*
http://localhost:3002/Especialidad  [GET]
*/


router.get('/', getEspecialidades)
router.get('/:id', getEspecialidad)
router.post('/', postEspecialidad)
router.put('/:id', updateEspecialidad)
router.delete('/:id', deleteEspecialidad)



export{router};

