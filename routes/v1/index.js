import express from "express";
import admin from "./admin.route"
import userQuery from './userQuery.route'
import ticket from './ticket.route'
import employee from './employee.route'
import notificationRoutes from "./notification.route";
import dashboard from "./dashboard.route";

const router = express.Router();

router.use("/admin", admin);




export default router;
