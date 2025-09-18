import { Router } from "express";
import { getSignedUrl } from "../utils/gcsUtils";
import { tokenMiddleware } from "../middleware/tokenMiddleware";

const router = Router();

router.get("/signed/:fileName", tokenMiddleware, async (req, res) => {
  const fileName = req.params.fileName;
  try {
    const url = await getSignedUrl(fileName);
    return res.json({ url });
  } catch (err) {
    console.error("signed url error:", err);
    return res.status(500).json({ error: "Failed to generate signed URL" });
  }
});

export default router;
