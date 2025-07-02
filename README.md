# AI Property Assistant

An intelligent assistant that helps users inquire about plot/flat availability, pricing, developer details, and project info — all with a smooth AI-style experience.  
Built with 💙 for the Hope AI Hackathon'25.

[![View Live](https://img.shields.io/badge/View%20Live-%F0%9F%9A%80-blue?style=for-the-badge)](https://ai-property-assistant.vercel.app)

---

## 🔥 Key Features

- 🧠 AI-style chatbot response for unit search
- 🔍 Property lookup by Unit Number (Flat/Plot)
- 🗂️ Modular fullstack structure (Java + React)
- ⚡ Built for fast load + modern UI with Tailwind
- 🌐 Live hosted with Vercel + clean GitHub CI/CD

---

## 💻 Tech Stack

| Layer     | Tech Stack                            |
|-----------|----------------------------------------|
| Frontend  | React, Vite, Tailwind CSS              |
| Backend   | Java 21, Spring Boot 3.5               |
| API Comm  | REST API + Axios                       |
| AI Logic  | LLM-style simulated reply (Expandable) |
| Hosting   | Vercel (frontend), Local backend       |

---

## 📁 Folder Structure

```
/ai-property-assistant
├── backend
│   ├── src/main/java/com/dhanasekar/propertyassistant/
│   │   ├── controller
│   │   ├── service
│   │   ├── model
│   │   └── config
│   └── application.properties
│
├── frontend
│   ├── src/
│   ├── pages/         → Home.tsx (main logic)
│   ├── components/    → LLMBox.tsx, UI blocks
│   ├── services/      → propertyService.ts
├── tailwind.config.js
├── vite.config.ts
│
├── data
│   └── mock_properties.json
├── README.md
```

---

## 🚀 How to Run (Local Dev)

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

---

## ✨ Demo Screenshot

![Demo](./![image](https://github.com/user-attachments/assets/bcd851c2-833d-4b56-a9dc-cd9b82434e0a))

---

## 👨‍💻 Built by

[Dhanasekar Raju](https://www.linkedin.com/in/dhanasekar-raju-20471341/)  
💻 Fullstack Developer | Java + React | AWS + CI/CD | Team Lead

---

## 📜 License

[MIT](./LICENSE)
