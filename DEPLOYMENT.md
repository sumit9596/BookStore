# Navigate to your BookStore folder
cd "c:\Users\Offic\OneDrive\Coding\React Project\New folder (2)\BookStore"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial BookStore project setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/BookStore.git

# Push to GitHub
git branch -M main
git push -u origin main# Vercel Deployment Guide for BookStore

## Prerequisites
- GitHub account with your project pushed to a repository
- Vercel account (free at https://vercel.com)
- MongoDB Atlas account (for the database URL)
- Node.js and npm installed locally

## Step 1: Prepare Your Environment Variables

### Backend (.env file)
Create a `.env` file in the `Backend/` folder using the template in `.env.example`:
```
MONGO_URL=mongodb+srv://your_username:your_password@cluster.mongodb.net/bookstore
TOKEN_SECRET=your_secret_key_here
PORT=4000
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

### Frontend (.env.local file)
Create a `.env.local` file in `Fronted/my-project/` using the template:
```
VITE_API_URL=https://your-project-name.vercel.app/api
```

## Step 2: Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 3: Deploy on Vercel

### Option A: Using Vercel CLI (Recommended)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your GitHub repository

### Option B: Using Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"
5. Vercel will auto-detect settings from `vercel.json`
6. Add environment variables in the "Environment Variables" section

## Step 4: Configure Environment Variables on Vercel

1. Go to your project settings on Vercel dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add the following:
   - `MONGO_URL` - Your MongoDB connection string
   - `TOKEN_SECRET` - Your JWT secret key
   - `FRONTEND_URL` - Your Vercel frontend URL (e.g., https://yourproject.vercel.app)

## Step 5: Update Frontend API URL

After deployment, update the `VITE_API_URL` in your frontend environment variable to point to your actual Vercel API endpoint:
```
VITE_API_URL=https://your-project-name.vercel.app/api
```

## Project Structure for Vercel

```
BookStore/
├── Backend/
│   ├── api/
│   │   └── index.js          (Serverless function entry point)
│   ├── controller/
│   ├── model/
│   ├── route/
│   ├── index.js              (Local dev server)
│   ├── package.json
│   └── .env.example
├── Fronted/
│   └── my-project/
│       ├── src/
│       ├── package.json
│       ├── vite.config.js
│       └── .env.example
└── vercel.json               (Deployment configuration)
```

## Deployment URLs

- **Frontend**: `https://your-project-name.vercel.app`
- **Backend API**: `https://your-project-name.vercel.app/api`

## Troubleshooting

### API calls failing
- Check that `VITE_API_URL` in frontend matches your Vercel deployment URL
- Ensure environment variables are set in Vercel dashboard
- Check CORS configuration in `Backend/api/index.js`

### Database connection issues
- Verify `MONGO_URL` is correct in Vercel environment variables
- Check MongoDB Atlas IP whitelist includes Vercel IPs (or set to 0.0.0.0/0 for testing)

### Build failing
- Check build logs in Vercel dashboard
- Ensure all dependencies are listed in both `Backend/package.json` and `Fronted/my-project/package.json`
- Make sure no `.env` file is committed to GitHub (add to `.gitignore`)

## Local Development

To test locally before deploying:

1. **Backend**:
   ```bash
   cd Backend
   npm install
   npm run dev
   ```
   API runs on `http://localhost:4000`

2. **Frontend**:
   ```bash
   cd Fronted/my-project
   npm install
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## Next Steps

After successful deployment:
1. Test all API endpoints through the frontend
2. Monitor application logs in Vercel dashboard
3. Set up automatic deployments whenever you push to `main` branch
4. Consider adding CI/CD workflows for testing before deployment
