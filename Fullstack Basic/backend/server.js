import express from 'express';

const app = express();
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Server is ready');
});

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [

        "Why don't scientists trust atoms? Because they make up everything!",

        "Why did the bicycle fall over? Because it was two-tired!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",

    ];
    res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});