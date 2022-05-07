import express, { Application, Request, Response } from "express";
import index from "./routes/index";
import cors from "cors";

export default function createServer() {
  const app: Application = express();

  // Route middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // app.use(routes);
  app.use('/', index);

  // @route GET /
  // @desc Home
  // @access Public
  app.get('/', (req: Request, res: Response) => {
    try {
      return res.status(200).json('Ok');
    } catch (error) {
      return res.status(500).json('Internal Server Error!');
    }
  });

  // @route GET /*
  // @desc Not Found
  // @access Public
  app.get('/*', (req: Request, res: Response) => {
    try {
      return res.status(404).json('Not Found');
    } catch (error) {
      return res.status(500).json('Internal Server Error!');
    }
  });

  return app;
}