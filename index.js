import express from "express";
import path from 'path';


const app = express();

const port = process.env.PORT || 8001;


app.use(express.static('public'))

app.get("/crs/verifyCertificate/",async (req,res) => {
    const file = path.join(path.resolve(path.dirname('')),'public','index.html');
    res.sendFile(file);
})

app.listen(port, () => {console.log(`Server is listening`)})