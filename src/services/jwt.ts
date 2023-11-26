import { User } from "@prisma/client";
import JWT from "jsonwebtoken";
import { JWTUser } from "../interfaces";

const JWT_SECRET = "$ps@xclone"

class JWTService{
    public static generateTokenForUser(user: User) {
        const payLoad: JWTUser = {
             id: user?.id,
             email: user?.email
        }
        const token = JWT.sign(payLoad, JWT_SECRET);
        return token;
    }

    public static decodeToken(token: string) {
        try{
            return JWT.verify(token, JWT_SECRET) as JWTUser;
        }catch(error) {
            return null;
        }
        
    }
}

export default JWTService;