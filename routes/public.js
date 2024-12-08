import express from "express"; // Importando o express para ser usado 
import bcrypt, { hash } from "bcrypt"; // Importando o Bcrypt para encriptar as senhas
import jwt from 'jsonwebtoken'; // Importando o JWT (token)
import { PrismaClient } from "@prisma/client"; // Importando o PrismaClient para ser usado

// Criando variável router para utilizar a função Router() do express
const router = express.Router();
// Criando variável prisma para utilizar o PrismaClient()
const prisma = new PrismaClient();
// Pegando o JWT_SECRET (no arquivo .env)
const JWT_SECRET = process.env.JWT_SECRET;

// Rota de cadastro (http://localhost:port/cadastro)
router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;

    // Criando uma variável para conter o tamanho do Hash a ser gerado (tam:10)
    const salt = await bcrypt.genSalt(10);
    // Criando uma variável para conter o hash da senha do usuário vinda do req.body gerando um hash de tamanho 10 (salt - nível de encriptação)
    const hashPassword = await bcrypt.hash(user.password, salt);

    // Pegando as informações do req.body para serem enviadas ao banco de dados
    // Cadastrando um novo usuário
    const userDb = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashPassword,
      },
    });

    res.status(201).json(userDb);
  } catch (err) {
    res.status(500).json({ message: "E-mail já cadastrado!" });
  }
});

// Rota de login (http://localhost:port/login)
router.post("/login", async (req, res) => {
  try {
    // Pegar as informações do usuário que vem no req.body
    const userInfo = req.body;
    // Ir no banco de dados para verificar se o usuário existe
    // onde (where) o email (no banco) seja igual ao email recebido no userInfo (login)
    const user = await prisma.user.findUnique({
      where: { email: userInfo.email },
    });

    // Se o usuário não existir, exibir a mensagem de erro "Usuário não cadastraado!"
    if (!user) {
      return res.status(404).json({ message: "Usuário não cadastrado!" });
    }

    // Verificando se a senha informada no login (userInfo) é a mesma que está no banco de dados (user.password)
    const isMatch = await bcrypt.compare(userInfo.password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: "Senha incorreta! Verifique e tente novamente!" });
    }

    // Gerar o TOken JWT para o usuário utilizar na navegação dentro do sistema
    // com duração de 4h, após isso, deslogará o usuário automativcamente
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '4h'});

    res.status(200).json(token); //Login realizado com sucesso e o usuário recebe seu token
  } catch (err) {
    res.status(500).json({ message: "Não foi possível conectar!" });
  }
});

// Para poder utilizar o arquivo e rotas em outro arquivo é necesário exportá-lo
export default router;
