require('dotenv').config({path:'variaveis.env'});
import  express  from 'express';
import PacienteRoute from './routes/PacienteRoute';




const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api' , PacienteRoute)

app.listen(3000,()=>{
    console.log('servidor rodando')
}



)

