// src/services/jwtService.ts

import jwt, { SignOptions } from "jsonwebtoken";

const secret = "chave-jwt";

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: SignOptions["expiresIn"]) => {
    return jwt.sign(payload, secret, { expiresIn: expiration });
  },

  verifyToken: (token: string,  callbackfn: jwt.VerifyCallback) => {
    jwt.verify(token, secret, callbackfn);
  }
};
