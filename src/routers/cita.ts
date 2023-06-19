import { Request, Response, Router } from "express";
import {getCita,getCitas,postCita,updateCita,deleteCita } from "../controllers/citas";

const router = Router()

/*
http://localhost:3002/Citas  [GET]
*/


router.get('/', getCitas)
router.get('/:id', getCita)
router.post('/', postCita)
router.put('/:id', updateCita)
router.delete('/:id', deleteCita)



export{router};

