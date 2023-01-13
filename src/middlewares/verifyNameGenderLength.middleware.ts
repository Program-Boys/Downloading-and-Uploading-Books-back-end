import { Request, Response, NextFunction } from 'express';

const verifyNameGenderLength = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, gender } = req.body;

  if (name.length < 5 || gender.length < 5) {
    return res
      .status(400)
      .json({ error: 'Enter characters greater than five.' });
  }

  next();
};

export default verifyNameGenderLength;
