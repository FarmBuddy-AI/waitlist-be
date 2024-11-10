import { Router, Request, Response, NextFunction } from 'express'
import User from '../models/userModel'

const router: Router = Router();

router.post("/waitlist/submit", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email } = req.body;

        const user = new User({
            name: name,
            email: email
        })
        const savedUser = await user.save()
        res.status(201).json({ message: "User saved to db", data: savedUser})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: " server error"})
    }
})

export default router;