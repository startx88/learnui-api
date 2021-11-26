import {Request, Response} from 'express';
import {CustomError} from '../errors';

/**
 * Error handler
 * @param error
 * @param req
 * @param res
 * @returns
 */
export const errorHandler = (error: Error, req: Request, res: Response) => {
  if (error instanceof CustomError) {
    return res.status(error.status).send({errors: error.errorSerialize()});
  }

  res.send([
    {
      message: error.message || 'Something went wrong',
      status: 500,
    },
  ]);
};
