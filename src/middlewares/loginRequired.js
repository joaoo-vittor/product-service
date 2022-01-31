import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      erros: ['Login is Required.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.PRIVATE_KEY).sub;
    const { user_id, user_name } = dados;

    console.log('->', dados);

    req.userId = Number(user_id);
    req.userName = user_name;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou Invalido!'],
    });
  }
};
