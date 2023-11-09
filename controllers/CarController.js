var CarModel = require('../models/CarModel.js');

/**
 * CarController.js
 *
 * @description :: Server-side logic for managing Cars.
 */
module.exports = {

    /**
     * CarController.list()
     */
    list: function (req, res) {
        CarModel.find()
            .then(function (Cars) {
                return res.json(Cars);
            })
            .catch(function (err) {
                return res.status(500).json({
                    message: 'Error when getting Car.',
                    error: err
                });
            });
    },

    /**
     * CarController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        
        console.log('ID:', id);
        CarModel.findOne({ _id: id })
            .then(function (car) {
                console.log('Found car:', car);
                if (!car) {
                    return res.status(404).json({
                        message: 'No such Car'
                    });
                }
                return res.json(car);
            })
            .catch(function (err) {
                console.log('Error:', err);
                return res.status(500).json({
                    message: 'Error when getting Car.',
                    error: err
                });
            });
    },
    
    

    /**
     * CarController.create()
     */
    create: function (req, res) {
        console.log("SSSSSSSSSSSSSSSSS")
        console.log(req)
        var Car = new CarModel({
            carBrend: req.body.carBrand, // Use the correct field name here
            carModel: req.body.carModel,
            manufacturingYear: req.body.manufacturingYear,
            color: req.body.color,
            isAutomatic: req.body.isAutomatic,
            price: req.body.price
        });
    
        Car.save()
            .then(function (Car) {
                return res.status(201).json(Car);
            })
            .catch(function (err) {
                return res.status(500).json({
                    message: 'Error when creating Car',
                    error: err
                });
            });
    },

    /**
     * CarController.update()
     */
  /**
 * CarController.update()
 */
update: async function (req, res) {
    const id = req.params.id;
    const updateFields = req.body;

    try {
        const carToUpdate = await CarModel.findById(id);

        if (!carToUpdate) {
            return res.status(404).json({ message: 'No such Car' });
        }

        for (const field in updateFields) {
            if (updateFields.hasOwnProperty(field)) {
                // Update the car property with the value from the JSON body
                carToUpdate[field] = updateFields[field];
            }
        }

        const updatedCar = await carToUpdate.save();

        return res.json({ message: 'Car updated successfully', updatedCar });
    } catch (err) {
        return res.status(500).json({
            message: 'Error when updating the Car.',
            error: err
        });
    }
},

    
    
    

    /**
     * CarController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
    
        CarModel.findOneAndDelete({ _id: id })
            .then(function (Car) {
                if (!Car) {
                    return res.status(404).json({
                        message: 'No such Car'
                    });
                }
                return res.status(204).json();
            })
            .catch(function (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Car.',
                    error: err
                });
            });
    },
    
    
    

};
