import express from "express";
import env from "dotenv";
import cors from "cors";

import { createClient } from "@supabase/supabase-js";

env.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supabase = createClient(process.env.DATABASE_URL,process.env.DATABASE_KEY);


app.get("/", async (_, response) => {
    try {
      const { data, error } = await supabase.from("to-dos").select();
      console.log(data);
      return response.send(data);
    } catch (error) {
      return response.send({ error });
    }
  });





// Services 

app.listen(process.env.PORT, () =>
  console.log(
    new Date().toLocaleTimeString() +
      `: Server is running on port ${process.env.PORT}...`
  )
);

