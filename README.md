# Express Assignment

express-assignment/
│-- routes/
│    ├── userRoutes.js
│    ├── productRoutes.js
│-- middleware/
│    ├── logger.js
│    ├── errorHandler.js
│-- controllers/
│    ├── userController.js
│    ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add `PORT=5000`.
4. Start the server using `node index.js`.

## API Endpoints
### Users
- GET `/users` - Fetch all users
- POST `/users` - Create a new user
- PUT `/users/:id` - Update user
- DELETE `/users/:id` - Delete user

### Products
- GET `/products` - Fetch all products
- POST `/products` - Create a new product
- PUT `/products/:id` - Update product
- DELETE `/products/:id` - Delete product
