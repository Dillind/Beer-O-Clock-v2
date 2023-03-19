import express from 'express';
import bodyParser from 'body-parser';

import beers from './routes/beers.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.use('/beers', beers)

app.get('/', (req, res) => {
    res.send("Hello from Homepage")
    // send status code ()
    // handle errors and return the error message
}) 

app.listen(PORT || process.env.PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

