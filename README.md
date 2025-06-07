# 🔐 Vite + Auth0 Calculator

A simple calculator built with **Vite** and **vanilla JavaScript**, secured using **Auth0 with Google login**. Authenticated users can perform calculations and store history locally.

![screenshot](./public/vite.svg)

---

## ✨ Features

- ✅ Google login via Auth0
- ✅ Auth-protected calculator interface
- ✅ Calculation history stored in localStorage
- ✅ Responsive layout using plain CSS
- ✅ Built using Vite for fast dev/build

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kkyian/vite-auth0-calculator.git
cd vite-auth0-calculator
```
### 2. Install dependencies

```bash
npm install
```
### 3. Set up Auth0

Create a .env file in the root:
```env
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
```
In the Auth0 dashboard, set:

  - Allowed Callback URLs: http://localhost:3000

  - Allowed Logout URLs: http://localhost:3000

  - Allowed Web Origins: http://localhost:3000

Enable the Google connection in your Auth0 app settings.
### 4. Run the dev server
```bash
npm run dev
```
Visit: http://localhost:3000
## 🧠 Folder Structure

```arduino
vite-auth0-calculator/
├── public/
├── src/
│   ├── main.js
│   ├── auth.js
│   ├── calculator.js
│   └── style.css
├── .env
├── .gitignore
├── index.html
├── vite.config.js
└── README.md
```
## 📦 Build for Production

```bash
npm run build
```
To preview:
```bash
npm run preview
```
## 🔒 Auth0 Notes

This app uses the @auth0/auth0-spa-js library. All authentication happens on the frontend. For production, you can enhance it with secure API routes and cloud-based history sync.
## 📄 License

MIT — Free to use and modify.
## 🙋‍♂️ Questions or Contributions?
Feel free to fork, open issues, or submit pull requests.
  Made with ❤️ using Vite + Auth0
  
