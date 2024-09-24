import { Request, Response } from "express";
import { paymentService } from "./payment.service";


export const confirmationController = async (req: Request, res: Response) => {
    const result = await paymentService.confirmationService()
    res.send(`<h1>Payment successfull</h1>`)
};


export const paymentController = {
    confirmationController
}