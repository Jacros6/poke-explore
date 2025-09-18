import jwt from "jsonwebtoken";
import { GameTokenPayload } from "../types/types";
import crypto from "crypto";
const SECRET = process.env.JWT_SECRET || "";

export function createGameToken(payload: GameTokenPayload) {
    console.log(SECRET)
  const res = jwt.sign(payload, SECRET);
  const decoded = jwt.decode(res);
  console.log(decoded)
  return res;
}

export function decodeGameToken(token: string): GameTokenPayload{
  return jwt.decode(token) as GameTokenPayload;
}

export function verifyGameToken(token: string): GameTokenPayload {
  return jwt.verify(token, SECRET) as GameTokenPayload;
}

