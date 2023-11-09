var express = require('express');
var router = express.Router();
var CarController = require('../controllers/CarController.js');

/**
 * @swagger
 * /cars:
 *   get:
 *     description: Get all cars
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', CarController.list);

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     description: Get a car by ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', CarController.show);

/**
 * @swagger
 * /cars:
 *   post:
 *     description: Create a new car
 *     responses:
 *       201:
 *         description: Car created
 */
router.post('/', CarController.create);

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     description: Update a car by ID
 *     responses:
 *       200:
 *         description: Success
 */
router.put('/:id', CarController.update);

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     description: Delete a car by ID
 *     responses:
 *       204:
 *         description: Car deleted
 */
router.delete('/:id', CarController.remove);

module.exports = router;
