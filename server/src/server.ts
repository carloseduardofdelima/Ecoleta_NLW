import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')));



app.listen(4000, () => {
    console.log('Rodando na porta 4000');
});

