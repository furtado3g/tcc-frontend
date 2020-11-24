import path from "path";
import express ,{Request,Response} from "express";
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get("*", (req:Request, res:Response) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
