import { Request, Response, NextFunction } from 'express';
import { AppError } from '../AppError';

export const handleErrors = (err: any, req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message,
    });
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};
