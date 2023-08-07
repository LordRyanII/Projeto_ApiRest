import { Router } from "express";
import homeController from "../controllers/homeController";
import { Aluno } from "../models/Aluno";
const router = new Router();


router.get('/', async (req, res) => {
  const novoAluno = await Aluno.create({
      nome: 'Ryan',
      sobrenome: 'Menezes',
      email: 'ryan.menezes@headscx.com',
      idade: 21,
      peso: 92,
      altura: 173,
  })

  res.json(novoAluno)
})

export default router
