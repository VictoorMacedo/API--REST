import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (mvc) => {
    mvc.route('/').get((req,res)=> {
        res.status(200).send({titulo : "Curso Duda"})
    })

    mvc.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;