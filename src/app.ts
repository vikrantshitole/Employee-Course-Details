import express, { Request, Response } from 'express';
import connectDB from './database';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import router from './routes';
import cors from 'cors';

dotenv.config()
connectDB()
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(router)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});