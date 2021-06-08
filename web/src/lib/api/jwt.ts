import jwt from "jsonwebtoken";

type TokenPayload = {
  id: string;
};

export async function sign(payload: TokenPayload): Promise<string> {
  return new Promise((resolve, reject) =>
    jwt.sign(payload, import.meta.env.VITE_JWT_SECRET, (err, token) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(token);
      }
    })
  );
}

export async function verify(token: string): Promise<TokenPayload> {
  return new Promise((resolve, reject) =>
    jwt.verify(token, import.meta.env.VITE_JWT_SECRET, (err, payload) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(payload as TokenPayload);
      }
    })
  );
}

export default {
  sign,
  verify,
};
