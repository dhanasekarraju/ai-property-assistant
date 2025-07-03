  # AI Property Assistant
  
  
  An intelligent assistant that helps users inquire about plot/flat availability, pricing, developer details, and project info — all with a smooth AI-style experience.  
  Built with 💙 for the Hope AI Hackathon'25.
  
  [![View Live](https://img.shields.io/badge/View%20Live-%F0%9F%9A%80-blue?style=for-the-badge)](https://ai-property-assistant.vercel.app)
  
  ---
  
  ## 🔥 Key Features
  
  - 🧠 AI-style chatbot reply with voice
  - 🔍 Search property by Unit No (Flat/Plot)
  - ⚡ Animated LLM-style typewriter effect
  - ⏳ Typing indicator (dots while thinking)
  - 🔊 Text-to-Speech integration (Web Speech API)
  - 🗂️ Modular Fullstack (Java + React + Tailwind)
  - 🌐 Frontend hosted live on Vercel
  
  ---
  
  ## 💻 Tech Stack
  
  | Layer     | Tech Stack                            |
  |-----------|----------------------------------------|
  | Frontend  | React, Vite, Tailwind CSS              |
  | Backend   | Java 21, Spring Boot 3.5               |
  | API Comm  | REST API + Axios                       |
  | AI Logic  | Simulated LLM response + TTS           |
  | Hosting   | Vercel (frontend), Local backend       |
  
  ---
  
  ## 📁 Folder Structure
  
  ```
  /ai-property-assistant
  ├── backend/
  │ ├── controller/
  │ ├── service/
  │ ├── model/
  │ └── config/
  ├── frontend/
  │ ├── pages/
  │ ├── components/
  │ ├── services/
  │ └── App.tsx
  ├── data/
  │ └── mock_properties.json
  ├── README.md
  ```
  ---
  
  ## 🚀 How to Run (Local Dev)
  
  ### Backend
  ```bash
  cd backend
  mvn spring-boot:run
  
  ```
  API Endpoint: http://localhost:8080/api/properties/A101
  
  ### Frontend
  ```bash
  cd frontend
  npm install
  npm run dev
  ```
  Runs at: http://localhost:5173
  
  ---
  
  ---
  
  ## ✨ Demo Screenshot
  
  ![AI Property Assistant Demo](https://i.ibb.co/84mVzDR3/Screenshot-from-2025-07-03-05-12-07.png)
  
  ---
  
  ## 👨‍💻 Built by
  
  [Dhanasekar Raju](https://www.linkedin.com/in/dhanasekar-raju-20471341/)  
  💻 Fullstack Developer | Java + React | AWS + CI/CD | Team Lead
  
  ---
  
  ## 📜 License
  
  [MIT](./LICENSE)
