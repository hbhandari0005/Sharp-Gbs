import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ success:false, msg:"All fields required" });

  const { data, error } = await supabase
    .from("contacts")
    .insert([{ name, email, message }]);

  if (error) {
    console.error("Supabase insert error:", error);
    return res.status(500).json({ success:false, msg:"Database error" });
  }

  res.json({ success: true, data });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
