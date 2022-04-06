import { NextFunction, Request, Response } from "express";

export default (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
): any => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => {
      next(err);
    });
  };
};
