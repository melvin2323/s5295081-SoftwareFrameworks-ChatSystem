const authenticate = (req, res, next) => {
    const auth = req.headers.authorization;
  
    if (auth && auth === 'Bearer your-token') {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  
  module.exports = authenticate;
  