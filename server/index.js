import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const app=express();const __filename=fileURLToPath(import.meta.url);const __dirname=path.dirname(__filename);const dist=path.join(__dirname,"..","dist");app.use(express.static(dist));app.get("*",(_,res)=>res.sendFile(path.join(dist,"index.html")));const port=process.env.PORT||4173;app.listen(port,()=>console.log(`Portfolio running on http://localhost:${port}`));
