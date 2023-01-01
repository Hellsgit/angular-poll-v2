import express from "express";
import cors from "cors";
import morgan from "morgan";
import optionsRoutes from "./routes/options.js";
import { getData, saveData } from "./utils/helper-utils.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const data = getData();

  if (!data) {
    return res.status(409).send({ error: true, msg: "Can't get data" });
  }

  res.send(data);
});

app.patch("/", (req, res) => {
  const data = getData();

  if (!data.question && !data.options.length) {
    return res.status(409).send({ error: true, msg: "Nothing to reset" });
  }

  data.question = "";
  data.options = [];
  data.totalVotes = 0;
  data.totalOptions = 0;

  saveData(data);
  res.send(data);
});

app.put("/question", (req, res) => {
  const data = getData();

  data.question = req.body.question;

  saveData(data);
  res.send(data);
});

app.use("/options", optionsRoutes);

app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});
