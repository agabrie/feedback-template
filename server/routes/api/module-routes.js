const router = require('express').Router();

const {getAllModules} = require('../../controllers/module-controller');

router.route('/')
.get(getAllModules)

module.exports = router;