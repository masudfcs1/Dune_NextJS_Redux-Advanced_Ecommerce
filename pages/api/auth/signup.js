import nc from "next-connect";
import db from "@/utils/db";
import { validateEmail } from "@/utils/validation";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "please fill in all field" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invaild email" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
