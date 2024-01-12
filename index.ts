import express from "express";
import cors from "cors";
import { FSRouter } from "./FSRouter";

const app = express();
const PORT = process.env.PORT || 5000;

const fsrouter = new FSRouter(app);
fsrouter.useFileSystemRouting();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => res.json({ status: "OK" }));

app.listen(PORT, () => console.log(`Server is started on http://localhost:${PORT}`));