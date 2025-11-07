
<img width="103" height="44" alt="svgexport-1" src="https://github.com/user-attachments/assets/2517ebe2-f3a1-44ae-9b32-75312941e91f" />

---

A high-fidelity, motion-driven agency website inspired by **K72 Montréal**, built using **React**, **Tailwind CSS**, and **GSAP**.  
This project focuses on cinematic motion design, seamless navigation, and expressive UI transitions to bring brand storytelling to life.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 📋 Table of Contents

- [📸 Screenshots](#-screenshots)
- [🌟 About the Project](#-about-the-project)
- [✨ Features](#-features)
- [💻 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📂 Folder Structure](#-folder-structure)
- [🎞️ Animation & GSAP Highlights](#%EF%B8%8F-animation--gsap-highlights)
- [👥 Project Team](#-project-team)
- [📜 License](#-license)

---

## 📸 Screenshots

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/c09915d1-5484-43dc-885d-961bf9f37668" />
<img width="1901" height="1079" alt="image" src="https://github.com/user-attachments/assets/12ecdf42-8320-4179-bf73-fefae2610a1c" />
<img width="1902" height="1079" alt="image" src="https://github.com/user-attachments/assets/a6208974-a976-4bd5-b75d-62ae561a9c1b" />
<img width="1896" height="1079" alt="image" src="https://github.com/user-attachments/assets/e2bae8ca-5610-4df8-a93c-a3764a2db593" />
<img width="1891" height="1079" alt="image" src="https://github.com/user-attachments/assets/c7014155-bca9-447c-929b-e360322107be" />
<img width="1894" height="1079" alt="image" src="https://github.com/user-attachments/assets/1353c5a0-c4bc-450b-8fd9-58a61d242adc" />
<img width="1904" height="1079" alt="image" src="https://github.com/user-attachments/assets/dd1a8c65-425a-4414-a9d4-e9fd870ad848" />

---

## 🌟 About the Project

**K72 Agency Website** is a React-based digital experience that brings together **creative storytelling, GSAP motion design, and interactive UI**.  
It captures the essence of modern digital agencies — bold typography, smooth transitions, and dynamic navigation — inspired by the *real K72 Montréal*.

> “Design. Motion. Emotion.”  
> K72 combines technology and art to create meaningful digital experiences.

### 🎯 Goals:
- Showcase the **power of motion** in UI/UX.
- Recreate the **cinematic flow** of high-end agency websites.
- Demonstrate **GSAP mastery** in React-based architectures.

---

## ✨ Features

- 🌀 **Cinematic Full-Screen Navigation** powered by GSAP timelines & staggered animations.  
- ⚡ **Scroll-based transitions** via ScrollTrigger (image reveals, section pins, and parallax effects).  
- 🎞️ **Dynamic Agency page** with live image swapping and marquee animations.  
- 🧠 **Smart component structure** with reusable context-driven navbar logic.  
- 💎 **Minimal dark/light adaptive styling** using TailwindCSS.  
- 🔁 **Continuous marquee animation** using GSAP modifiers and loops.  
- 🕶️ **Custom Fonts** (`font1`, `font2`) for brand-accurate typography.  

---

## 💻 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js |
| **Styling** | Tailwind CSS |
| **Animation** | GSAP (GreenSock Animation Platform), ScrollTrigger |
| **Routing** | React Router |
| **State Management** | React Context API |
| **Build Tool** | Vite |
| **Icons / Assets** | Custom SVGs & Media Components |
| **Deployment** | GitHub Pages / Vercel |

---

## 🚀 Getting Started

To run the project locally:

### Prerequisites

Ensure you have **Node.js (v16+)** and **npm** or **yarn** installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/AyushAwasthi26/K72.git

# Navigate into the folder
cd K72

# Install dependencies
npm install

# Start the development server
npm run dev
````

Now open your browser at **[http://localhost:5173/](http://localhost:5173/)**

---

## 📂 Folder Structure

```bash
K72/
│
├── public/
│   ├── Media/
│   │   ├── Agency/
│   │   │   ├── imgi_1_Carl_480x640.jpg
│   │   │   ├── imgi_2_Olivier_480x640.jpg
│   │   │   └── ...
│   │   ├── NavBar/
│   │   │   ├── b1-1.jpg
│   │   │   ├── b2-2.jpg
│   │   │   ├── b4-gif.gif
│   │   │   └── heart-b-3.svg
│   │   └── Projects/
│   │       ├── i1.jpg → i16.jpg
│   │       ├── heart-b-3-green.svg
│   │       └── ...
│   └── svgs/
│       └── Globe.svg
│
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── HomeHero.jsx       # Hero section (video & heading)
│   │   │   ├── HomeMid.jsx        # Tagline & intro section
│   │   │   ├── HomeBottom.jsx     # CTA & footer buttons
│   │   │   ├── Time.jsx           # Dynamic Montreal time component
│   │   │   └── video.jsx          # Background looping video
│   │   │
│   │   ├── navigation/
│   │   │   ├── Navbar.jsx         # Top navbar (state-aware)
│   │   │   └── FullScreenNav.jsx  # GSAP full-screen nav animations
│   │   │
│   │   ├── project/
│   │   │   └── ProjectCard.jsx    # Hover-reveal project cards
│   │   │
│   │   └── context/
│   │       └── NavContext.jsx     # Context for nav state & animation blocking
│   │
│   ├── pages/
│   │   ├── Home.jsx               # Homepage composition
│   │   ├── Projects.jsx           # Work showcase (GSAP scroll animation)
│   │   └── Agency.jsx             # About / Team page with marquee + ScrollTrigger
│   │
│   ├── index.css                  # Tailwind + global styles
│   ├── main.jsx                   # ReactDOM root
│   ├── App.jsx                    # App-level route container
│   └── vite.config.js             # Vite configuration
│
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎞️ Animation & GSAP Highlights

### 🧭 FullScreen Navigation

**File:** `FullScreenNav.jsx`

* Uses `gsap.timeline()` for entrance and exit animations.
* Controls staggered `.stairing` div heights for cinematic reveals.
* Context-managed animation lock (`isAnimating`) ensures no double-triggers.
* Timeline structure:

  ```js
  tl.to(".stairing", { height: "100%", stagger: { amount: -0.3 } })
    .to(".navlink", { opacity: 1 })
    .to(".link", { rotateX: 0, opacity: 1 });
  ```

### 🖼️ Agency Page Scroll Effect

**File:** `Agency.jsx`

* ScrollTrigger pins a central image container and updates the image dynamically as you scroll.
* Marquee animation built with GSAP modifiers for infinite looping names.
* Dynamic dark mode toggles when reaching the team section.

### 🧱 Projects Page

**File:** `Projects.jsx`

* Project list powered by mapped `ProjectCard` components.
* ScrollTrigger animates project height and visibility for smooth load transitions.

### 💡 Home Page

**File:** `HomeHero.jsx`

* Video embedded within headline typography.
* Animated CTA circles (“Work”, “Agency”) at the bottom with glowing borders.

---

## 👥 Project Team

**→ Ayush Awasthi [Lead Developer & UI/UX Designer]**
Designed and built the entire front-end architecture, GSAP animation logic, and motion transitions for K72.

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE.md](LICENSE.md) file for details.

---

[🔝 Back to Top](#-table-of-contents)

