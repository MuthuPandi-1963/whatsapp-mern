import {Router} from "express";
import { getUserProfile, loginUser, registerUser, updateUserProfile } from "../controllers/AuthController.js";
import { AuthProtector } from "../middlewares/authProtector.js";

export const AuthRoutes = Router();

AuthRoutes.post("/register", registerUser);
AuthRoutes.post("/login", loginUser);
AuthRoutes.get("/me", AuthProtector, getUserProfile);
AuthRoutes.put("/me", AuthProtector, updateUserProfile);

