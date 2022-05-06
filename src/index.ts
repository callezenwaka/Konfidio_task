import express, {Application, Request, Response, NextFunction} from "express";
import cors from "cors";
import index from "./routes/index";

const app: Application = express();

// Route middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ping home route
app.get('/', (req: Request, res: Response) => {
  try {
    return res.status(200).json('Ok');
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
});

// Verify request
app.use('/', index);

// notfound route handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = {
    statusText: new Error('Not Found'),
    status: 404
  };
  next(error);
})

// Set up port and start the server
app.listen( process.env.PORT, () => {
  console.log(`Server running at:`);
  console.log(`- Local: http://localhost:${process.env.PORT}`);
});

export default app;