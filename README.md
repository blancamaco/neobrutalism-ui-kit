# 🧱 Neobrutalist UI Kit
A bold and expressive component library built with **React** and **Tailwind CSS**, exploring the visual aesthetic of the **Neobrutalist** design style.
<br />
<br />


<img width="1186" height="741" alt="image1" src="https://github.com/user-attachments/assets/7876a3cb-e51f-444c-9aea-3d7e62e48401" />  


---

## ✨ Description

This project was born from a personal fascination with the Neobrutalist design trend, which has an aesthetic that evokes the nostalgic web 1.0 energy and feels like a refreshing break from minimalism.  
I wanted to explore how this style could be applied **systematically**, not just as decoration, but as a **functional, reusable component library**.

The result is the **Neobrutalist UI Kit**, a modular React + Tailwind component system.

🖥️ [play with it yourself](https://neobrutalist-ui-kit.netlify.app)

---

## 🎨 Design Concept

The goal was to translate Neobrutalism’s traits into a cohesive UI system:

- **Visual language:** Bold borders, flat color planes, and slightly offset shadows for depth.  
- **Typography:** Heavy geometric typefaces that express confidence and personality.  
- **Color system:** A restricted palette combining vivid accents with neutral backgrounds to create contrast.  
- **Usability:** Despite the aesthetic boldness, every element remains functional and accessible.

---

## ⚙️ Tech Stack

- **React + Vite**  
- **Tailwind CSS** for rapid styling and custom theming  
- **Figma** for visual exploration and component design  
- **twMerge** for dynamic class merging in React components  

---

## 🧩 Project Architecture

```
src/
├── assets/
│   └── ...
│
├── components/
│   ├── button.jsx
│   ├── checkbox.jsx
│   ├── input.jsx
│   ├── toggle.jsx
│   ├── dropdown.jsx
│   └── container.jsx
│
├── styles/
│   └──  tailwind.css
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx

```

**Flow summary:**
- Each component (Button, Input, Toggle, Dropdown, etc.) is modular and prop-driven.  
- Global design tokens are defined in a Tailwind theme (following Tailwind v4) and custom CSS variables.  
- Components use `twMerge` to manage interaction states (`hover`, `focus`, `disabled`) cleanly in JSX.  
- All states are visually documented in the UI showcase.

---

## 🌀 Animations & Microinteractions

- Subtle motion and offset shadows simulate a “tactile” 3D effect.  
- Hover and focus transitions emphasize bold feedback without losing usability.  
- The exaggerated borders and limited motion reinforce the handcrafted, retro-futurist aesthetic.

---

## 🚀 Run Locally

1. Clone this repository:  
   ```bash
   git clone https://github.com/blancamaco/neobrutalist-ui-kit.git
   cd neobrutalist-ui-kit
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Run the project locally:  
   ```bash
   npm run dev
   ```

---

## 💬 Key Learnings

Throughout this project I learned to:

- Build scalable component architectures using **React** and **Tailwind CSS**.  
- Manage long utility class lists cleanly using **constants and twMerge**.  
- Implement **custom design tokens**.  
- Maintain accessibility standards while exploring a bold and unconventional aesthetic.  
- Balance expressive visual design with functional, reusable code.

---

## 🪩 Case Study

📸 [Full Case Study](https://blancamaco.github.io/neobrutalistUIKit.html)
<br />
🖥️ [Watch it live](https://neobrutalist-ui-kit.netlify.app)

---

## 🧑‍🎨 Author

Design & development by **Blanca**, UX Engineer.  
💌 [https://blancamaco.github.io]
