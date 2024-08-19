import * as express from "express";
import schemas, { validate } from "../Validation/validators";
import userController from "../controllers/user.controller";


const router = express.Router();

router.post("/", userController.create);
router.post("/login", validate.body(schemas.login), userController.login);

export default router;
