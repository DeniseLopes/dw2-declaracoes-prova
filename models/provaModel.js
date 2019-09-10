const path = require('path')
const fs = require('fs')

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'provas.json'
)
class Prova{
    constructor(disciplina, professor, dataProva){
        this.disciplina = disciplina
        this.professor = professor
        this.dataProva = dataProva
    }
    salvar(){
        let provas = []
        try{
        let data = fs.readFileSync(dbPath)
            provas = JSON.parse(data.toString())
        }catch(e){}
        
        provas.push(this)
        fs.writeFileSync(dbPath, JSON.stringify(provas))
    }

    static listar(){
        let provas
        try{
            let data = fs.readFileSync(dbPath)
                provas = JSON.parse(data.toString())
            }catch(e){}
        return provas
    }
}
module.exports = Prova