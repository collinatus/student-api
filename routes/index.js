const routes = require('express').Router();
const controller = require('../controllers/studentController.js');

routes.get('/', controller.getAllStudents);
routes.get('/:id', controller.getSingleStudent);

module.exports = routes;

