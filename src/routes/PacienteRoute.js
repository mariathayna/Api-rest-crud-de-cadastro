import {Router} from 'express'
import pacienteController from '../controllers/PacienteController'




const router = Router()

router.post('/paciente',pacienteController.inserirPacientes)   

router.get('/paciente',pacienteController.listarPacientes)

router.put('/paciente',pacienteController.editarPacientes)

router.delete('/paciente',pacienteController.removerPacientes)


export default router;