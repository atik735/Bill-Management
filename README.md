
# Bill Management Website 💳

A modern and responsive Bill Management web application that allows users to view and pay utility bills using their available balance. It features secure authentication, dynamic bill filtering, balance deduction on payment, and profile management.

## 🌐 Live URL

🔗 [Live Site](https://bill-pays-98812.web.app/)

---

## 🧠 Project Overview

This application enables users to:

- 🧾 Add and manage bill payments
- 🔍 View a summary of total paid/unpaid bills
- 🔐 Register/Login securely using Firebase Authentication
- 📝 Filter and view bills based on status
- 📊 Responsive design for mobile and desktop
- ⚡ Smooth UI/UX using modern design tools

---

## 🚀 Key Features

- 🔐 Firebase Authentication (Email/Password)
- ➕ Add new bills with amount and date
- ✅ Mark bills as paid/unpaid
- 🧮 Summary section for total paid/unpaid
- 🧾 Bill history list with status filter
- 🎯 User-specific data tracking
- 📱 Fully responsive and mobile-first layout
- 📣 Toast notifications on actions

---

## 📦 NPM Packages Used

| Package           | Description                                      |
|-------------------|--------------------------------------------------|
| `firebase`        | For authentication and Firestore DB              |
| `react`           | JavaScript library for UI                        |
| `react-dom`       | DOM support for React                            |
| `react-router`    | Page routing and navigation                      |
| `tailwindcss`     | CSS utility framework                            |
| `react-toastify`  | Toast notifications                              |
| `swiper`          | For carousels/sliders if used                    |
| `react-icons`     | For using icons in UI                            |
| `daisyui`         | Component UI library on top of Tailwind          |
| `vite`            | Fast frontend tooling                            |

---

## 🛠️ How to Run the Project Locally

### 📁 Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/your-bill-management-repo.git

cd your-bill-management-repo
npm install
⚙️ Step 4: Setup Firebase Environment Variables
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_project.firebaseapp.com
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_project.appspot.com
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id
-----
npm run dev

