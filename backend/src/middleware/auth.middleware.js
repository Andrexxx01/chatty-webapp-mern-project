import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jet;

        if(!token) {
            return res.status(401).json({ message: "Untauthorize-No Token Provided "});
        }

    } catch (error) {

    }
}