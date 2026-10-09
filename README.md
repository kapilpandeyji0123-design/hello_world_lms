<div align="center">

# 🎓 SmartLearn
### Online Learning Management System

*A modern, responsive EdTech frontend built with React, Vite & React Router*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-4C1?style=for-the-badge)](#-license)

[![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4?style=flat-square)](#-contributing)
[![Made with ❤](https://img.shields.io/badge/made%20with-%E2%9D%A4-red?style=flat-square)](#)

**Student • Instructor • Admin — three dashboards, one seamless platform.**

</div>

---

## 📖 Overview

**SmartLearn** is a fully responsive Learning Management System (LMS) frontend that brings together **students, instructors, and administrators** into one clean, modern interface. It ships with realistic mock data out of the box and is designed to plug straight into a **Java Spring Boot REST API** (or any backend of your choice) down the line.

Whether you're browsing courses, tracking assignments, grading students, or managing platform-wide analytics — SmartLearn gives every role a purpose-built dashboard.

---

## ✨ Features

<table>
<tr>
<td width="33%" valign="top">

### 🧑‍🎓 Student
- Personalized dashboard
- My Learning & course player
- Assignments & quizzes
- Certificates
- Wishlist
- 🤖 AI Assistant
- Smart recommendations
- Notifications & profile settings

</td>
<td width="33%" valign="top">

### 👨‍🏫 Instructor
- Instructor dashboard
- Course creation studio
- Manage enrolled students
- Performance analytics
- Course management

</td>
<td width="33%" valign="top">

### 🛡️ Admin
- Platform-wide dashboard
- Manage students & instructors
- Course & category oversight
- Reports & insights

</td>
</tr>
</table>

- 📱 **Fully responsive** — sidebars collapse into slide-in drawers, tables scroll on mobile, navbar becomes a hamburger menu
- 🎨 **Design-token driven styling** — plain CSS, no framework lock-in, easy to theme
- ⚡ **Blazing fast** dev experience powered by Vite
- 🔌 **Backend-ready** — swap mock data for real API calls with minimal changes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| 🧩 **Framework** | [React 19](https://react.dev/) |
| ⚡ **Build Tool** | [Vite 8](https://vitejs.dev/) |
| 🧭 **Routing** | [React Router 7](https://reactrouter.com/) |
| 🎨 **Icons** | [lucide-react](https://lucide.dev/) |
| 💅 **Styling** | Plain CSS with a design-token system (`tokens.css`, `global.css`) |
| 🧹 **Linting** | [oxlint](https://oxc.rs/) |
| 🔮 **Planned Backend** | Java Spring Boot REST API |

---

## 📂 Project Structure

```
smartlearn-online-learning-management-system/
├── public/                  Static assets (favicon, icons)
├── src/
│   ├── components/          Navbar, Footer, Sidebar, CourseCard, StatCard,
│   │                        Rating, ProgressBar, BarChart...
│   ├── layouts/             PublicLayout (marketing) · DashboardLayout (roles)
│   ├── data/                mockData.js, navConfig.js
│   ├── pages/
│   │   ├── student/         Dashboard, Assignments, Quizzes, Certificates...
│   │   ├── instructor/      Dashboard, Courses, CreateCourse, Analytics...
│   │   └── admin/           Dashboard, Students, Instructors, Reports...
│   ├── styles/               Design tokens + global stylesheet
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🗺️ Routes

<details>
<summary><b>🌐 Public Routes</b></summary>
<br>

| Route | Description |
|---|---|
| `/` | Landing page |
| `/courses` | Browse all courses |
| `/courses/:id` | Course details |
| `/login` | Sign in |
| `/register` | Sign up |
| `/about` | About page |
| `/contact` | Contact page |

</details>

<details>
<summary><b>🧑‍🎓 Student Routes</b></summary>
<br>

| Route | Description |
|---|---|
| `/student/dashboard` | Student overview |
| `/student/my-learning` | Enrolled courses |
| `/student/course/:id/learn` | Course player |
| `/student/assignments` | Assignments |
| `/student/quizzes` | Quiz list |
| `/student/quiz/:id` | Take a quiz |
| `/student/certificates` | Earned certificates |
| `/student/wishlist` | Saved courses |
| `/student/ai-assistant` | AI-powered assistant |
| `/student/recommendations` | Personalized picks |
| `/student/profile` | Profile |
| `/student/settings` | Account settings |
| `/student/notifications` | Notifications |

</details>

<details>
<summary><b>👨‍🏫 Instructor Routes</b></summary>
<br>

| Route | Description |
|---|---|
| `/instructor/dashboard` | Instructor overview |
| `/instructor/courses` | Manage courses |
| `/instructor/create-course` | Create a new course |
| `/instructor/students` | Enrolled students |
| `/instructor/analytics` | Performance analytics |

</details>

<details>
<summary><b>🛡️ Admin Routes</b></summary>
<br>

| Route | Description |
|---|---|
| `/admin/dashboard` | Admin overview |
| `/admin/students` | Manage students |
| `/admin/instructors` | Manage instructors |
| `/admin/courses` | Manage courses |
| `/admin/categories` | Manage categories |
| `/admin/reports` | Platform reports |

</details>

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/manojkumarr12121-jpg/smartlearn-online-learning-management-system.git

# 2. Move into the project
cd smartlearn-online-learning-management-system

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the printed local URL — typically **http://localhost:5173** 🎉

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production → outputs to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the codebase with oxlint |

---

## 🔌 Connecting to a Spring Boot Backend

All data currently lives in `src/data/mockData.js`. To wire up a real API:

1. Add a `src/api/client.js` with a small `fetch` wrapper pointing at your Spring Boot base URL.
2. Replace static imports from `mockData.js` in each page with real API calls (e.g. via `useEffect` + `useState`, or React Query).
3. Keep the same object shapes as `mockData.js` so existing components don't need to change.
4. Add real authentication (JWT) and guard `/student`, `/instructor`, and `/admin` routes — there is currently **no route protection**, since this is a UI-only build.

---

## 📝 Notes

> ⚠️ This is currently a **frontend-only** build. All data is mocked and nothing persists between reloads.

- 🤖 The AI Assistant and Recommendations pages simulate responses client-side — swap in real API calls when ready.
- 📱 Fully responsive down to mobile: collapsible sidebars, horizontally scrollable tables, and a hamburger navbar.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is available under the **MIT License**. Feel free to use it for learning or as a base for your own LMS.

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

Made with ❤️ by [manojkumarr12121-jpg](https://github.com/manojkumarr12121-jpg)

</div>
