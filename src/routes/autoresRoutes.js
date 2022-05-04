import express from "express";
import AutorController from "../controllers/autoresControllers.js";

const router = express.Router();

router
    .get("/autores", AutorController.listaAutor)
    .get ("/autores/:id", AutorController.listaAutorPorId)
    .post("/autores", AutorController.cadastraAutor)
    .put("/autores/:id", AutorController.atualizaAutor)
    .delete("/autores/:id", AutorController.excluirAutor)


    export default router;