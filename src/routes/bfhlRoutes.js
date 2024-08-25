const express = require('express');
const { postBfhl, getBfhl } = require('../controllers/bfhlControllers');
const { validateBfhlPost } = require('../validations/bfhlValidation');

const router = express.Router();

router.post('/', validateBfhlPost, postBfhl);
router.get('/', getBfhl);

module.exports = router;
