import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import ip from "ip";
import frameGuard from "frameguard";
import passport from "passport";
import cors from "cors";
import http from "http";
import morgan from "morgan";
import fileRoutes from "@/routes/fileRouter";

import { SocketInstance } from "./integrations/socket";


/* Database Import */
import databaseConnect from "./database/connection";

/* Config Import */
import config from "@/config";

/* Route Import */
import router from "@/routes";

/* App Initialize */
const app = express();

/* Middleware setup */
app.use(cors({
  origin: true, 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
}));


app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(frameGuard({ action: "sameorigin" }));
app.use(morgan('dev'));

/* Initialize Passport JS */
app.use(passport.initialize());
require("./security/passport").userAuthMiddleware(passport);

/* Check IP */
const serverIP = ip.address();
console.log("\x1b[91mDo not populate clientId field anywhere...");
console.log(`\x1b[95mSERVER IP: ${serverIP}`);

/* Route Declaration */
app.get("/", (req, res) => res.json({ status: "UP", message: "Server runs" }));
app.use(express.json());
app.use("/api", router);
app.use("/assets", fileRoutes);


/* Server Listener */
const server = http.createServer(app);

/* Initialize Database & Socket */
databaseConnect((isConnect) => {
  if (isConnect) {
    server.listen(config.PORT, () => {
      new SocketInstance(server);
      console.log(`\x1b[33mServer runs in port ${config.PORT}...`);
    });
  }
});

export default server;