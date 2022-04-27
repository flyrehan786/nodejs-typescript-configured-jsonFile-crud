import { config } from '../config';
import express, { Application } from 'express';
const app: Application = express();
app.listen(config.port, () => {
    console.log('Listening on port: ' + config.port);
})