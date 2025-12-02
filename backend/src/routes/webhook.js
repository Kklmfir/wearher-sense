import express from 'express';
import axios from 'axios';
const router = express.Router();

router.post('/telegram', async (req,res) => {
  // handle updates from Telegram webhook. Example: user shares location.
  const update = req.body;
  // parse update and respond via Telegram sendMessage
  res.sendStatus(200);
});

export default router;
