import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import { dbConnection } from "./database/dbConnection.js";
import {reservationRouter} from "./routes/reservationRoute.js";
import { errorMiddleware } from "./error/error.js";
export const app = express();
dotenv.config({path: "./config/config.env"})

app.use(
    cors({
        origin: [process.env.FRONTEND_URL], //connecting backend to frontend 
        methods: ["POST"],
        credentials: true,
})
);

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/reservation', reservationRouter);
app.use(errorMiddleware);
dbConnection();