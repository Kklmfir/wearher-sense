import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import weatherRouter from './routes/weather.js';
import webhook from './routes/webhook.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/weather', weatherRouter);
app.use('/api/webhook', webhook);

app.get('/', (req,res) => res.send('WeatherSense backend ok'));
const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Server listening ${port}`));
