const express = require('express');
const routes = express.Router();
const add = require('../controller/add');

routes.post('/add-method',add.addmethod);

routes.get('/get-method',add.getmethod);

routes.delete('/delete-method/:id',add.deletemethod);

module.exports = routes;