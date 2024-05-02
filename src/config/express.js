import express from "express";
import multer from "multer";
import device from "express-device";
import session from "express-session";
import compression from "compression";
import { fileURLToPath } from "url";
import { dirname } from "path";

import dotenv from "dotenv";
import cors from "cors";




//routes 
import users from "../routes/users.js";

dotenv.config();

const configureApp = () => {
  const app = express();
  const corsOptions = {
    origin: true,
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  };
  app.use(cors(corsOptions));
 
    
  app.use(
    express.urlencoded({
      extended: false,
    })
  );
  app.use(express.json());

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  app.use(
    multer({
      dest: __dirname + "/data/",
    }).any()
  );
 

  users(app);
 

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(501).send("Something broke!");
  });

  return app;
};

export default configureApp;
