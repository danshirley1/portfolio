import { app } from './app';

const port = process.env.PORT || (process.argv[2] || 4001);

app.listen((typeof port === 'number') ? port : 4001);
