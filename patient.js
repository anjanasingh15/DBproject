const express = require('express');
const router = express.Router();
const auth = require('../middleware');
const { addPatient, getPatients } = require('../controllers/patientController');

router.post('/', auth, addPatient);
router.get('/', auth, getPatients);

module.exports = router;
