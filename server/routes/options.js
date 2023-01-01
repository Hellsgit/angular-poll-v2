import express from "express";
import {
  addOption,
  patchOption,
  deleteOption,
} from "../controllers/options.js";

const router = express.Router();

router.post("/", addOption);
router.patch("/:id", patchOption);
router.delete("/:id", deleteOption);

export default router;
