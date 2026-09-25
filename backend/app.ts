import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import expensesRouter from './routes/expenses.router.ts';

const app = express();

const PORT = process.env.port || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(cors({ origin: [/localhost/, /\.onrender\.com$/] }));
app.use(
  cors({
    origin: ['http://localhost:5173', /\.onrender\.com$/],
  })
);

app.get('/ping', (req, res) => {
  res.sendStatus(204);
});

app.use('/api/expenses', expensesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

export default app;
