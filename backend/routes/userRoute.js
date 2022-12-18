import { registerData } from "../controllers/register.js";
import { Router } from "express";
import { adminData } from "../controllers/admin.js";

const router = Router();
router.post("/register", registerData.addData);
router.get("/data", adminData.getData);
router.get("/data/:id", adminData.getDataById);
router.put("/data/:id", adminData.updateData);
router.delete("/data/:id", adminData.deleteData);

export default router;
