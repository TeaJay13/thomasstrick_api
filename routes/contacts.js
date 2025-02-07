const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
router.get('/', contactsController.getAll);


/**
 * @swagger
 * /contacts/{_id}:
 *   get:
 *     summary: Get a single user
 *     description: Retrieve a single user from the database using their unique _id.
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: The MongoDB ObjectId of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful request, user found.
 *       404:
 *         description: User not found.
 */
router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;