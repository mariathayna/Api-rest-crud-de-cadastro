import {Router} from 'express'
import pacienteController from '../controllers/PacienteController'
import Paciente from './models/Paciente';
import sequelize from './db';
import bodyParser from 'body-parser';


const router = Router()

router.post('/paciente',pacienteController.inserirPacientes)    

// Rota para inserir um novo paciente
app.post('/pacientes', async (req, res) => {
    try {
      const paciente = req.body;
      const novoPaciente = await Paciente.create(paciente);
      res.status(201).json(novoPaciente);
    } catch (err) {
      console.error('Erro ao inserir o paciente: ' + err.message);
      res.status(500).send('Erro ao inserir o paciente.');
    }
  }),
  
  // Rota para listar todos os pacientes
  app.get('/pacientes', async (req, res) => {
    try {
      const pacientes = await Paciente.findAll();
      res.status(200).json(pacientes);
    } catch (err) {
      console.error('Erro ao buscar pacientes: ' + err.message);
      res.status(500).send('Erro ao buscar pacientes.');
    }
  });
  
  // Rota para editar informações de um paciente
  app.put('/pacientes/:id', async (req, res) => {
    const pacienteId = req.params.id;
    const pacienteAtualizado = req.body;
  
    try {
      const [rowsUpdated, [updatedPaciente]] = await Paciente.update(pacienteAtualizado, {
        where: { id: pacienteId },
        returning: true,
      });
  
      if (rowsUpdated === 0) {
        res.status(404).json({ message: 'Paciente não encontrado' });
      } else {
        res.status(200).json(updatedPaciente);
      }
    } catch (err) {
      console.error('Erro ao atualizar o paciente: ' + err.message);
      res.status(500).send('Erro ao atualizar o paciente.');
    }
  });
  
  // Rota para remover um paciente
  app.delete('/pacientes/:id', async (req, res) => {
    const pacienteId = req.params.id;
  
    try {
      const deletedPaciente = await Paciente.destroy({
        where: { id: pacienteId },
      });
  
      if (!deletedPaciente) {
        res.status(404).json({ message: 'Paciente não encontrado' });
      } else {
        res.sendStatus(204);
      }
    } catch (err) {
      console.error('Erro ao excluir o paciente: ' + err.message);
      res.status(500).send('Erro ao excluir o paciente.');
    }
  });
  
  sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  });
  

export default router;