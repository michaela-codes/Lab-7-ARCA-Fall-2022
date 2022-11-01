const express = require('express');
const router = express.Router();
const controller = require('../controller/toDo.controller');


router.post('/', controller.addItem);
router.get('/:id', controller.getSingleItem);
router.put('/:id', controller.editItem)
router.patch('/:id', controller.editItem2);
router.get('/', controller.listItems);
router.delete('/:id', controller.deleteItem);



module.exports = router;