import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../utils/types";
import { TOKEN_SECRET } from "../utils/constant";

interface JWT_DECODE {
  id: number;
  iat: number;
  exp: number;
}

