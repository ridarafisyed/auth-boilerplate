import express from "express"
import http from "node:http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import mongoose from "mongoose";


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

const MONGO_URL = `mongodb+srv://ridarafisyed:H6mbE8OLrM9httBN@mymaincluster.bslsqzr.mongodb.net/?retryWrites=true&w=majority`

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error:Error)=> console.log(error))