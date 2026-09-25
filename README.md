AI Text-to-Image Generator

It is a MERN stack AI image generator that converts text prompts into images using the Clipdrop API.

✨ Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication
- 🎨 AI Text-to-Image Generation
- 🪙 Credit-Based Image Generation
- 📊 Credit Balance Tracking
- 🗄️ MongoDB Database
- 📱 Responsive UI
- 🔔 Toast Notifications

🛠️ Tech Stack

Frontend: React, Vite, React Router, Axios, React Toastify

Backend: Node.js, Express.js, MongoDB, Mongoose, JWT

AI: Clipdrop Text-to-Image API

🚀 Getting Started

1. Clone the repository

git clone https://github.com/your-username/your-repository.git
cd your-repository

2. Install dependencies

cd server
npm install

cd ../client
npm install

3. Environment Variables

Create "server/.env":

PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLIPDROP_API=your_clipdrop_api_key

4. Run the project

Backend:

cd server
npm run dev

Frontend:

cd client
npm run dev

🔄 How It Works

1. Create an account or login.
2. Enter an image prompt.
3. The request is sent to the Express backend.
4. Clipdrop generates the image.
5. The generated image is displayed.
6. One credit is deducted after successful generation.

🔒 Security

- JWT-based authentication
- Protected API routes
- Password hashing
- Environment variables for sensitive keys


👨‍💻 Author

Abdul Samad

Built with using the MERN Stack.
