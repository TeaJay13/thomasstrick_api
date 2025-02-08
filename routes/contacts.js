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

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new user
 *     description: Add a new user to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Lorraine"
 *               lastName:
 *                 type: string
 *                 example: "Strickland"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "lorraine@email.com"
 *               favoriteColor:
 *                 type: string
 *                 example: "blue"
 *               birthday:
 *                 type: string
 *                 format: date
 *                 example: "1990-08-01"
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: Invalid input data.
 */

router.post('/', contactsController.createContact);


/**
 * @swagger
 * /contacts/{_id}:
 *   put:
 *     summary: Update a user's information
 *     description: Update an existing user's details in the database.
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: The MongoDB ObjectId of the user to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Lorraine"
 *               lastName:
 *                 type: string
 *                 example: "Strickland"
 *               email:
 *                 type: string
 *                 example: "lorrines@email.com"
 *               favoriteColor:
 *                 type: string
 *                 example: "blue"
 *               birthday:
 *                 type: string
 *                 format: date
 *                 example: "1990-08-01"
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       400:
 *         description: Invalid input data.
 *       404:
 *         description: User not found.
 */
router.put('/:id', contactsController.updateContact);

/**
 * @swagger
 * /contacts/{_id}:
 *   delete:
 *     summary: Delete a user
 *     description: Remove a user from the database using their unique _id.
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: The MongoDB ObjectId of the user to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 */
router.delete('/:id', contactsController.deleteContact);

module.exports = router;