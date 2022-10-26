const router = require('express').Router();

const moduleRoutes = require('./module-routes');
const coreConceptRoutes = require('./core-concept-routes');

router.use('/modules', moduleRoutes);
router.use('/core-concepts', coreConceptRoutes);

module.exports = router;