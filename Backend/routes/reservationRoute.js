import express from "express";
import { sendReservation} from "../controller/reservation.js"
export const reservationRouter = express.Router();

reservationRouter.post("/send", sendReservation);