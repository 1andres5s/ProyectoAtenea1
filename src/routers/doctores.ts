import { Request, Response, Router } from "express";
import { getDoctor,getDoctores,postDoctor,updateDoctor,deleteDoctor} from "../controllers/doctores";

const router = Router()

/*
http://localhost:3002/Doctores  [GET]
*/


router.get('/', getDoctor)
router.get('/:id', getDoctores)
router.post('/', postDoctor)
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)



export{router};

