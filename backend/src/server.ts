import express, {Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.json({message: "Hello Worlddasdqweqwe"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})