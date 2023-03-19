import express from 'express';
import beerData from './beerData.js'

import { v4 as uuidv4} from 'uuid';

const router = express.Router();

// GET /beers
router.get('/', (req, res) => {
    res.send(beerData)
})

// generate random ID
// router.post('/', (req, res) => {
//     const beer = req.body;
//     beerData.push({... beer, id: uuidv4()})
//     res.send(`Beer with the name ${beer.brand} has been added to the database!`
//     );
// })

// GET /beers/:id
router.get('/:id', (req, res) => {
    const { id } = req.params
    const foundBeer = beerData.find((beer) => beer.id === id)
    if (foundBeer) {
        res.status(302)
        res.send(foundBeer)
    } else {
        res.status(500)
        res.send(`Beer not found with ${id}`)
    }
})

// foundBeer ? {res.status(302) res.send(foundBeer)} : {res.status(500) res.send(`Beer with ID ${id} not found)`}


export default router;

