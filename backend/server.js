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
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message)
      return res
        .status(400)
        .json({ success: false, msg: "All fields required" });

    await supabase.from("contacts").insert([{ name, email, phone, message }]);
  } 
  catch (err) {
    console.error("Supabase insert error:", err);
    return res.status(505).json({ success: false, msg: "Database error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
