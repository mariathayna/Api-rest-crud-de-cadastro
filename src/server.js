require('dotenv').config({path:'variaveis.env'});
import  express  from 'express';
import PacienteRoute from './routes/PacienteRoute';
import './models/Paciente';
import db from './db.js'



const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api' , PacienteRoute)

db.sync( () => console.log (`banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000,()=>{
    console.log('servidor rodando')
}
)

