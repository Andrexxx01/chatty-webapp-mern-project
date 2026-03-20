// src/docs/swagger.js
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.4",
    info: {
      title: "Chatty API",
      version: "1.0.0",
      description: "Complete API documentation for Chatty backend",
    },
    servers: [
      {
        url: "http://localhost:5001",
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "jwt",
        },
      },
      schemas: {
        ErrorResponse: {
          type: "object",
          properties: {
            message: {
              type: "string",
              example: "Unauthorized - No token provided",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "67d123abc456",
            },
            fullName: {
              type: "string",
              example: "Andre Kurniawan",
            },
            email: {
              type: "string",
              example: "andre@mail.com",
            },
            profilePic: {
              type: "string",
              example:
                "https://res.cloudinary.com/demo/image/upload/sample.jpg",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        SignupRequest: {
          type: "object",
          required: ["fullName", "email", "password"],
          properties: {
            fullName: {
              type: "string",
              example: "Andre Kurniawan",
            },
            email: {
              type: "string",
              example: "andre@mail.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
          },
        },
        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "andre@mail.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
          },
        },
        UpdateProfileRequest: {
          type: "object",
          required: ["profilePic"],
          properties: {
            profilePic: {
              type: "string",
              example: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
            },
          },
        },
        Message: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "67d123message456",
            },
            senderId: {
              type: "string",
              example: "67d123abc456",
            },
            receiverId: {
              type: "string",
              example: "67d987xyz654",
            },
            text: {
              type: "string",
              example: "Hello there",
            },
            image: {
              type: "string",
              example: "",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        SendMessageRequest: {
          type: "object",
          properties: {
            text: {
              type: "string",
              example: "Hello from Swagger UI",
            },
            image: {
              type: "string",
              example: "",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
