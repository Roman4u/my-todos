import express from "express";
import http from "http";
import mongoose from "mongoose";

import { config } from "./config/config";

const router = express();
const URL = config.mongo.url;

mongoose
  .connect(URL, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
