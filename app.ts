import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Happy Monday!</h1>");
});

app.listen(3000, () => {
    console.log("start! express server on port 3000");
});