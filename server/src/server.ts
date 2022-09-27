import express, { Express, Request, Response, NextFunction } from "express";
import http from "http";
import mongoose from "mongoose";
import cors from "cors";

import { config } from "./config/config";
import todoRoutes from "./routes/index";


const router: Express = express();
router.use(cors());


const URL = config.mongo.url;
const PORT = config.server.port;


mongoose
  .connect(URL)
  .then(() => {
    console.log("connected");
    StartServer();
  })
  .catch((error) => {
    console.log(error);
  });

  const StartServer = () => {
    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    /** Routes */
    router.use("/todos", todoRoutes)

     /** Router Health Check */
     router.get("/", (req: Request, res: Response, next: NextFunction) => {
      return res.status(200).json({ message: 'server is working' });
    });

    /** Error handling */
    router.use((req: Request, res: Response, next: NextFunction) => {
      const error = new Error("route not found");
      return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

  };
