# 🚀 Responsive React Web Application

A modern, responsive web application built with **React** and **Tailwind CSS**.  
The app includes a landing page with a hero header, pricing plans, and reviews/testimonials.  
It is fully responsive, optimized for both **desktop** and **mobile** views.

---

## ✨ Features

- 🎨 **Responsive Design**: Works seamlessly across mobile, tablet, and desktop.
- ⚡ **React**: Component-driven architecture for easy updates.
- 💅 **Tailwind CSS**: Utility-first styling for rapid UI development.
- 📱 **Mobile-First Approach**: Layouts scale up naturally for larger devices.

---

## 📂 Project Structure

src/
├── App.js # Main app component
├── Footer.js # Reusable footer component
├── TaskFlow.js # Main page with hero, cards, reviews, pricing
├── index.css # Tailwind base styles and custom CSS
└── index.js # React entry point
public/
└── ... # Static assets etc.
tailwind.config.js # Tailwind configuration
package.json # Project dependencies and scripts

---

## 🛠️ Local Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/NMekks/elevvo-internship-task3-taskflow.git
cd elevvo-internship-task3-taskflow
```
```
npm install
```
```
npm start
```


## 🛠 How Tailwind is Set Up
### 1. Install Dependencies and Add Config File
```
npm install -D tailwindcss@3
npx tailwindcss init
```

### 2. `tailwindcss.congif.js`
```javascript
 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/*"],
   theme: {
     extend: {},
   },
   plugins: [],
   corePlugins: {
    preflight: false,   // <--- disables Tailwind’s base styles
  },
 }
```

### 3. `index.css`

Tailwind's directives are included in the main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add any custom styles below */
```

