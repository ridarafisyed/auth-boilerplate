import express from "express"
import http from "node:http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"

const app = express()
const hostname = "127.0.0.1";
const port = 8080;


app.use(cors({
    credentials:true,
}))

app.use(compression())
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app)

app.get("/", (req, res) => { res.send("Hello World") })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});