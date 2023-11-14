import Paciente from "../models/Paciente";

class PacienteController{
    async  inserirPacientes (req, res) {
        try {
            const paciente = req.body;
            const novoPaciente = await Paciente.create(paciente);
            res.status(201).json(novoPaciente);
          } catch (err) {
            console.error('Erro ao inserir o paciente: ' + err.message);
            res.status(500).send('Erro ao inserir o paciente.');
          }
        };

    async listarPacientes (req, res)  {
        try {
        const pacientes = await Paciente.findAll();
        res.status(200).json(pacientes);
            } catch (err) {
              console.error('Erro ao buscar pacientes: ' + err.message);
              res.status(500).send('Erro ao buscar pacientes.');
            }
          };

    async editarPacientes (req, res)  {
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
          };

          async removerPacientes (req, res)  {
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
          };
          
          
          
}


 
           
 export default new PacienteController()     
            

           