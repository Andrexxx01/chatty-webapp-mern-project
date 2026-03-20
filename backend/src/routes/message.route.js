import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/message/users:
 *   get:
 *     summary: Get users for sidebar
 *     description: Get all users except current authenticated user
 *     tags: [Messages]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of users for chat sidebar
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/users", protectRoute, getUsersForSidebar);

/**
 * @swagger
 * /api/message/{id}:
 *   get:
 *     summary: Get messages with selected user
 *     tags: [Messages]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Receiver user id
 *         schema:
 *           type: string
 *           example: 67d987xyz654
 *     responses:
 *       200:
 *         description: List of messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 */
router.get("/:id", protectRoute, getMessages);

/**
 * @swagger
 * /api/message/send/{id}:
 *   post:
 *     summary: Send message
 *     description: Send text or image message to selected user
 *     tags: [Messages]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Receiver user id
 *         schema:
 *           type: string
 *           example: 67d987xyz654
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SendMessageRequest'
 *           examples:
 *             textOnly:
 *               summary: Send text only
 *               value:
 *                 text: Hello from Swagger
 *             imageOnly:
 *               summary: Send image only
 *               value:
 *                 image: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...
 *             textAndImage:
 *               summary: Send text and image
 *               value:
 *                 text: Here is the image
 *                 image: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...
 *     responses:
 *       201:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       400:
 *         description: Invalid message payload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/send/:id", protectRoute, sendMessage);

export default router;