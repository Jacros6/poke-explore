import dotenv from "dotenv";
dotenv.config();
import express, {Request, Response} from "express";
import gameRoutes from "./routes/gameRoutes";
import imageRoutes from "./routes/imageRoutes";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200', // frontend origin
  methods: ['GET','POST','PUT'],
  allowedHeaders: ["Content-Type"]  
}));


const PORT = process.env.PORT;

app.use("/game", gameRoutes);
app.use("/images", imageRoutes);

app.get("/", (req: Request, res: Response) => {
    res.json({message: "Hello Worlddasdqweqwe"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
