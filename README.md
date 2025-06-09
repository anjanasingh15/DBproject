# Healthcare Patient Management System

## 📦 Backend

- Built with Node.js, Express, MongoDB
- Handles:
  - Authentication (JWT)
  - Patient CRUD
- Folder structure:
  - `models/`
  - `controllers/`
  - `routes/`
  - `middleware.js`

## ⚛️ Frontend

- React-based UI
- Environment variable in `.env`: `REACT_APP_API_URL`

## ☁️ Deployment

1. MongoDB Atlas: Create cluster + user
2. Render.com: Deploy backend
3. Vercel.com: Deploy frontend

## 🛠️ Setup

1. Clone repo
2. Configure `.env` in both frontend & backend
3. Run backend: `node server.js`
4. Run frontend: `npm start` inside `frontend/`

## ✅ Example API Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/patients` (with token)
- `POST /api/patients` (with token)
