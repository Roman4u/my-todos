import express from "express";
import http from "http";
import mongoose from "mongoose";

import { config } from "./config/config";

const router = express();

mongoose
    .connect(config.mongo.url)
    .then(() => {
        console.log("connected");
    })
    .catch((error) => {
        console.log(error);
    });