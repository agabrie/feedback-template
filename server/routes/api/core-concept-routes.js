const router = require('express').Router();

const {getAllCoreConcepts,createCoreConcept, removeCoreConcept} = require('../../controllers/core-concept-controller');

router.route('/')
.get(getAllCoreConcepts)
.post(createCoreConcept)

router.route('/:conceptId')
.delete(removeCoreConcept)

module.exports = router;