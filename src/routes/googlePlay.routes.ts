import { Router } from "express";
import {
 
  getAppInfo,
  searchAppInfo,
  suggestAppInfo,
  topApp,
  
} from "../controllers/googlePlay.Controllers";
import { Auth } from "../middlewares/Auth";

const router = Router();

router.get("/app/:appId", getAppInfo);
router.get("/search", searchAppInfo);
router.get("/suggest", suggestAppInfo);
router.get("/topApp", topApp);


export default router;
