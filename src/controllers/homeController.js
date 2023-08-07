import { Aluno } from "../models/Aluno";


class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ryan',
      sobrenome: 'Menezes',
      email: 'ryan.menezes@headscx.com',
      idade: 21,
      peso: 92,
      altura: 173,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
