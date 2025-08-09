import express from "express";
import admin from "./admin.route";
import employee from "./employee.route";

const router = express.Router();

router.use("/admin", admin);
router.use("/employee", employee);
export default router;
