🌐 Backend Setup
This app expects a backend with the following endpoints:

POST /api/pins: Add a new pin

GET /api/pins: Get all pins

POST /api/users/register: Register a new user

POST /api/users/login: Log in a user

Make sure your backend server runs on http://localhost:8000 or update the BASE_URL in MapComponent.jsx if deployed.

Recommended backend stack:

MongoDB

Express.js

Mongoose

🔐 Authentication
Authentication is managed via localStorage. On successful login/register:

user is stored in localStorage

You can log out via the Logout button

🗺️ Usage
Double-click on the map to add a new pin (must be logged in).

Fill in the title, description, and rating.

Existing pins can be clicked to view reviews.

You can distinguish your pins (red) from others (slate blue).

Login/Register via the buttons on the top right.

📁 Folder Structure
bash
Copy
Edit
src/
│
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│
├── pages/
│   └── MapComponent.jsx
│
├── App.js
└── index.js
🧪 Example .env (Optional)
You may want to store your backend URL in an environment file:

env
Copy
Edit
REACT_APP_BASE_URL=https://your-backend-url.com
And update MapComponent.jsx:

js
Copy
Edit
const BASE_URL = process.env.REACT_APP_BASE_URL;
🐞 Known Issues
Mobile responsiveness might need fine-tuning.

No persistent session (JWT or cookies) – only localStorage for auth.

No error handling on form submission if API fails.

✨ Future Improvements
Add photo uploads for each pin

Implement persistent login with JWT

Enable edit/delete for user-created pins

Add clustering for pins

Mobile-first UI design

Dark mode

👨‍💻 Author
Ebunoluwa Owoeye
Frontend Engineer & Fullstack Developer
GitHub

📄 License
This project is open source and available under the MIT License.

