# 🚗 AutoCare – Task 2 (Templating + Bundler Implementation)

## 📌 Overview

This project is a recreation of **Task 1 AutoCare website** using a **templating engine and bundler**, as required in Task 2.

The goal is to maintain the same UI/UX while implementing a structured development workflow.

---

## 🛠️ Tech Stack Used

### ✔ Templating Engine

* **Nunjucks**

### ✔ Bundler / Task Runner

* **Vite**

---

## 📂 Project Structure

```
auto-care-task-2/
│
├── dist/                     # ✅ FINAL BUILD (IMPORTANT)
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── index.html
│   ├── about.html
│   └── contact.html
│
├── src/                      # ✅ SOURCE CODE
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│   │
│   ├── templates/
│   │   ├── layouts/
│   │   │   └── base.njk
│   │   │
│   │   ├── pages/
│   │   │   ├── index.njk
│   │   │   ├── about.njk
│   │   │   └── contact.njk
│   │   │
│   │   └── partials/
│   │       ├── navbar.njk
│   │       └── footer.njk
│
├── screenshots/              # ✅ FOR README
│   ├── preview1.png
│   ├── preview2.png
│   └── preview3.png
│
├── package.json              # ✅ scripts (dev, build, preview)
├── package-lock.json
├── vite.config.js            # ✅ nunjucks plugin
├── README.md                 # ✅ documentation
```

---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Run development server

```
npm run dev
```

### 3️⃣ Build for production

```
npm run build
```

### 4️⃣ Preview production build

```
npm run preview
```

---

## 🎯 Features Implemented

* Responsive AutoCare website
* Nunjucks templating (reusable layouts & pages)
* Vite bundler integration
* Booking modal with dynamic form handling
* Contact form with success message
* Google Maps integration
* Clean UI with animations

---

## 📸 Screenshots

### 🏠 Home Page

![Home](./screenshots/preview1.png)

### ℹ️ About Page

![About](./screenshots/preview2.png)

### 📞 Contact Page

![Contact](./screenshots/preview3.png)

---

## 📌 Notes

* The UI matches Task 1 design as required.
* Minor enhancements like animations and map are included.
* Separate GitHub repository is maintained as instructed.

---

## 👩‍💻 Author

Preethi
