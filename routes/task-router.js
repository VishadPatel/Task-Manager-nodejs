const express = require('express');
const controller = require('../controller/task-controller.js');

const router = express.Router();

router.get('/',controller.list);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.get('/:id', controller.get);
router.delete('/:id', controller.remove);

module.exports = router;
