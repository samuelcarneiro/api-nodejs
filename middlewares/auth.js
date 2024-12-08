import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  // Pegando o token
  const token = req.headers.authorization;

  // Se não houver token gerado, apresentar a mensagem de 'Acesso negado!' ao usuário
  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }

  try {
    // Pega o token e substitui o 'Bearer ' por nada (sem nada) para ficar somente o token e verifica com o JWT_SECRET
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

    //Pegar o ID do usuário do token
    req.userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ message: "Token inválido! Acesso negado!" });
  }

  //Tem que adicionar esse next(), do contrário a aplicação trava, não continua.
  next();
};

export default auth;
