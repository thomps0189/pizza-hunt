const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//set up get one, put, and delete at /api/pizza/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);


module.exports = router;