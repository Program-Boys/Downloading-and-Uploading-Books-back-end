import { Request, Response, NextFunction } from 'express';

const verifyEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;

  if (email !== 'angela@gmail.com') {
    return res.status(400).json({ error: 'You are not admin' });
  }

  next();
};

export default verifyEmailMiddleware;
