const express = require('express');
const router = express.Router();

const { postCarUsers, getCarUsers, getCarUsersById, editCarUsers, patchCarUsers, deleteCarUsers } = require('../controllers/carusers');

router.post('/', postCarUsers);

router.get('/', getCarUsers);

router.get('/:id', getCarUsersById);

router.put('/:id',  editCarUsers);

router.patch('/:id', patchCarUsers);

router.delete('/:id', deleteCarUsers);

module.exports = router;
