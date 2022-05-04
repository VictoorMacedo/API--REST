import autores from "../models/Autor.js";

class AutorController{

    static listaAutor = (req, res)=>{
        autores.find((err, autor) =>{
            res.status(200).json(autor)
        })
    }

    static listaAutorPorId = (req, res)=> {
        const id = req.params.id
        autores.findById(id, (err, autor)=> {
            if (err){
                res.status(400).send({message: `${err.message}- Id doautor não encontrada`})
            } else {
                res.status(200).send(autor)
            }
        }) 
    }

    static cadastraAutor = (req, res) => {
       let autor = new autores (req.body)

    autor.save((err)=> {
            if (err){
                res.status(500).send({message: `${err.message} - erro ao cadastra autor`})

            } else {
                res.status(200).send(autor.toJSON())
            }
        })
    }   
    
    static atualizaAutor = (req, res)=> {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: ` autor atualizado com sucesso`})
            }else {
                res.status(400).send({message: `${err}`})
            }
        })
    }

    static excluirAutor = (req, res) =>{
        const id = req.params.id

        autor.findByIdAndDelete(id, (err)=>{
           if (!err){
                res.status(200).send({message: ` autor excluido com sucesso`})
            } else {
                res.status(500).send ({message: `${err}`})
            }
        })
    }
}

export default AutorController

