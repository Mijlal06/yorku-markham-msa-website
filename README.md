# YorkU Markham MSA Website

A professional full-stack website for the YorkU Markham Muslim Student Association. The website includes a modern responsive frontend, dark/light mode, contact form, email integration, and an admin messages page.

## Live Website

Frontend: https://yorku-markham-msa-website.vercel.app
Backend: https://yorku-markham-msa-backend.onrender.com

## Features

* Responsive multipage website
* Home page with Arabic greeting
* About page
* Events page
* Prayer & Resources page
* FAQ page with accordion dropdowns
* Contact page with working form
* Privacy Policy page
* Terms & Conditions page
* Dark/light mode
* Mobile hamburger navbar
* Footer with Instagram link
* Backend contact form API
* Web3Forms email integration
* Admin messages page
* Delete message functionality
* Live deployment with Vercel and Render

## Tech Stack

### Frontend

* React
* Vite
* React Router
* CSS
* Vercel

### Backend

* Node.js
* Express.js
* CORS
* dotenv
* Web3Forms API
* Render

## Project Structure

```txt
yorku-markham-msa-website/
├── frontend/
│   ├── public/
│   │   └── logo.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Resources.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Privacy.jsx
│   │   │   ├── Terms.jsx
│   │   │   ├── AdminMessages.jsx
│   │   │   └── NotFound.jsx
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   └── responsive.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   │   └── contactController.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── data/
│   │   └── contactMessages.json
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Pages

### Home

The landing page includes a Bismillah greeting, Islamic greeting, welcome message, mission highlights, programs, and calls to action.

### About

The About page explains the purpose, mission, vision, and values of YorkU Markham MSA.

### Events

The Events page displays upcoming and future MSA programs such as Jummah updates, halaqas, welcome socials, volunteering, charity drives, and executive application updates.

### Prayer & Resources

The Resources page includes prayer space information, daily prayer timing notes, Jummah information, and student resource guidance.

Prayer space:

```txt
Multi-Faith and Reflection Room
Location: MK 2000
```

### FAQ

The FAQ page answers common questions about joining the MSA, attending events, prayer space, volunteering, and collaborations.

### Contact

The Contact page allows students to submit a message. The form sends the message to the MSA email through Web3Forms and also saves it to the backend admin messages system.

### Admin Messages

The admin messages page allows authorized users to view and delete contact form submissions.

Route:

```txt
/admin/messages
```

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Mijlal06/yorku-markham-msa-website.git
cd yorku-markham-msa-website
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

## Environment Variables

### Frontend `.env`

Create this file:

```txt
frontend/.env
```

Add:

```env
VITE_API_URL=http://localhost:5001
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

For the deployed Vercel version, `VITE_API_URL` should point to the live Render backend:

```env
VITE_API_URL=https://yorku-markham-msa-backend.onrender.com
```

### Backend `.env`

Create this file:

```txt
backend/.env
```

Add:

```env
PORT=5001
ADMIN_PASSWORD=your_admin_password
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Do not upload `.env` files to GitHub.

## Running Locally

From the main project folder, run the frontend:

```bash
npm --prefix frontend run dev
```

Run the backend in another terminal:

```bash
npm --prefix backend run dev
```

Frontend local URL:

```txt
http://localhost:5173
```

Backend local URL:

```txt
http://localhost:5001
```

## Build Test

To test the frontend production build:

```bash
npm --prefix frontend run build
```

## Deployment

### Frontend

The frontend is deployed on Vercel.

Important Vercel settings:

```txt
Root Directory: frontend
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Vercel environment variables:

```env
VITE_API_URL=https://yorku-markham-msa-backend.onrender.com
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

### Backend

The backend is deployed on Render.

Important Render settings:

```txt
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

Render environment variables:

```env
PORT=10000
ADMIN_PASSWORD=your_admin_password
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

## Security Notes

The following files should not be committed to GitHub:

```txt
.env
frontend/.env
backend/.env
node_modules/
backend/data/contactMessages.json
```

The `.gitignore` file is used to protect private keys, passwords, and local data.

## Social Links

Instagram:

```txt
https://www.instagram.com/york_markham_msa/
```

## Future Improvements

* Add official event registration forms
* Add a proper database such as MongoDB or Firebase
* Add custom domain
* Add more student resources
* Add official executive team section after elections
* Add event image gallery
* Add newsletter signup
* Add prayer timing updates when available
