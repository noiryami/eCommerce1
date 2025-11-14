# Vercel Deployment Guide for eCommerce Project

## Overview
Your project is now configured to deploy on Vercel with a JSON database (`db.json`) as your backend.

## What Has Been Updated

### 1. **vercel.json** ✅
- Configured build command and output directory
- Set up API rewrites to handle `/api/*` routes
- Added environment variable configuration

### 2. **api/data.js** ✅
- Updated to properly read from `db.json` in the API directory
- Fixed path resolution for Vercel environment

### 3. **src/services/axios-global.js** ✅
- Updated to detect environment (local vs Vercel)
- Uses `http://localhost:5005` for local development
- Uses `{your-domain}/api` for production on Vercel

### 4. **.vercelignore** ✅
- Created to ensure `api/` and `db.json` are included in deployment

## Deployment Steps

### Step 1: Commit Your Changes
```bash
git add .
git commit -m "Configure project for Vercel deployment with JSON database"
git push origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy from project root
vercel
```

#### Option B: Using GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your `eCommerce1` repository
5. Click "Import"
6. Framework: Leave as "Other" (Vite will auto-detect)
7. Click "Deploy"

### Step 3: Verify Deployment
After deployment, your app will be available at `https://your-project-name.vercel.app`

Test the API endpoint by visiting:
- `https://your-project-name.vercel.app/api/users`
- `https://your-project-name.vercel.app/api/products`

## How It Works

### Architecture
```
Vercel (Production)
├── Frontend (React/Vite)
│   └── Served from `/dist`
└── API Routes (Serverless Functions)
    └── `/api/*` → reads from `db.json`

Local Development
├── Frontend (React/Vite)
│   └── http://localhost:5173
└── Backend (JSON Server)
    └── http://localhost:5005
```

### Local Development
When developing locally:
```bash
# Terminal 1: Start React app
npm run dev

# Terminal 2: Start JSON Server
cd api
npm start
```

### Vercel Production
The Vercel deployment will:
1. Build your React app with `npm run build`
2. Output to `/dist` directory
3. Serve static files from `/dist`
4. Handle API requests from `/api/*` using serverless functions

## API Endpoints

### Available Endpoints (from db.json)
- `GET /api/users` - Get all users
- `GET /api/products` - Get all products
- `GET /api/orders` - Get all orders
- `GET /api/categories` - Get all categories
- `GET /api/wishlists` - Get all wishlists

## Important Notes

⚠️ **JSON Database Limitations on Vercel:**
- JSON Server on Vercel uses serverless functions, which are **stateless**
- **Write operations (POST, PUT, DELETE) are NOT recommended** as changes won't persist between deployments
- Use this setup for **read-only scenarios** OR upgrade to a proper database (MongoDB, PostgreSQL, etc.)

## For Production-Grade Database
Consider upgrading to:
- **MongoDB Atlas** (Free tier available)
- **PostgreSQL** with Vercel Postgres
- **Firebase Realtime Database**
- **Supabase** (PostgreSQL alternative)

## Troubleshooting

### API Returns 404
- Check that `api/db.json` exists
- Verify `.vercelignore` is not ignoring the api folder

### CORS Issues
- Add CORS middleware in `api/index.js` if needed
- Update axios requests to use relative paths (`/api/*`)

### Environment Variables
- Use `VITE_API_URL` for frontend environment variable
- Set in Vercel project settings if needed

## Next Steps
1. ✅ Commit and push changes to GitHub
2. ✅ Deploy to Vercel
3. ✅ Test your API endpoints
4. ✅ Consider upgrading to a proper database for write operations

---
**Happy Deploying! 🚀**
