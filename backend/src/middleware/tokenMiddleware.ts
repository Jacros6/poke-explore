import { Request, Response, NextFunction } from "express";
import { verifyGameToken } from "../utils/tokenUtils";

export function tokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const { token } = req.body;
  if (!token) return res.status(403).send("Token required");

  try {
    req.body.payload = verifyGameToken(token);
    next();
  } catch {
    return res.status(401).send("Invalid token");
  }
}
