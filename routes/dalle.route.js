import express from "express";
import { getImage } from "../controllers/dalle.controller";
const router = express.Router();

router.get("/", (req, res) => {
	res.send("GET request to the homepage");
});

router.post("/", getImage);

export default router;
