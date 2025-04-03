import express, { Request, Response } from 'express';
import connectDB from './database';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import router from './routes';
dotenv.config()
connectDB()
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(router)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});