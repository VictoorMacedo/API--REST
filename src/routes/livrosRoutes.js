import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listaLivros)
    .get("/livros/busca", LivroController.buacaLivroPorEditora)
    .get ("/livros/:id", LivroController.listaLivrosPorId)
    .post("/livros", LivroController.cadastraLivros)
    .put("/livros/:id", LivroController.atualizaLivros)
    .delete("/livros/:id", LivroController.excluirLivro)


    export default router;