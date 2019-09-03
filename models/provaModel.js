const provas = []

class Prova{
    constructor(disciplina, professor, dataProva){
        this.disciplina = disciplina
        this.professor = professor
        this.dataProva = dataProva
    }
    salvar(){
        provas.push(this)
    }

    static listar(){
        return provas
    }
}
module.exports = Prova