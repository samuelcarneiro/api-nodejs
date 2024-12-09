// Importar o Express instalado para poder usá-lo
import express from "express";
// Importanto o arquivo de rotas publicas e privadas
import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js";
import cors from "cors";

// Importando o auth para verificação de autorização
import auth from "./middlewares/auth.js";

// Criando um variável const app para utilizar o express()
const app = express();
// Informar ao express() para utilizar o .json
app.use(express.json());
// Habilitando o CORS na aplicação para que o front-end acesse o back-end
app.use(cors());

// Configurando para somente um site acesse o backend
// app.use(cors('www.meusite.com.br'))
// E assim somente o site especificado terá permissão para acessar

// http://localhost:port/cadastro
app.use("/", publicRoutes); //Usar rotas públicas
app.use("/", auth, privateRoutes); //Usar rotas privadas

/**
 * O JWT nos auxilia em criar e gerenciar as rotas públicas e privadas do sistema.
 * Rotas públicas: Login e Cadastro (qualquer pessoa pode acessar)
 * Rotas privadas: Listar usuários (somente pessoas logadas podem acessar)
 */

// Porta que será utilizada pelo servidor express + mensagem de execução
app.listen(3000, () => console.log("Servidor em execução!"));
