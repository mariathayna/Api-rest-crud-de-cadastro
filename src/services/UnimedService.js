const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((cadastrado, nao_cadastrado)=>{

            db.query('SELECT * FROM Unimed', (error,results)=>{
               if(error) { nao_cadastrado(error); return; }
               cadastrado(results);
            });
        });
    }       
};