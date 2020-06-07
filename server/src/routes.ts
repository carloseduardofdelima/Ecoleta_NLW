import express from 'express';

import PointsController from './controller/pointsController';
import ItemsController from './controller/itemsController'; 

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();



routes.get('/', (req, res) => {
    return res.send("Arroz")
});

routes.get('/items', itemsController.list);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.list);
routes.get('/points/:id', pointsController.show);

export default routes;