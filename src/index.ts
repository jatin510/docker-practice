import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'hi from docker' });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);
