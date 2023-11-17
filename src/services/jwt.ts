import { User } from "@prisma/client";
import { prismaClient } from "../clients/db";
import JWT from "jsonwebtoken";

const JWT_SECRET = "$ps@xclone"

class JWTService{
    public static generateTokenForUser(user: User) {
        const payLoad = {
             id: user?.id,
             email: user?.email
        }
        const token = JWT.sign(payLoad, JWT_SECRET);
        return token;
    }
}

export default JWTService;