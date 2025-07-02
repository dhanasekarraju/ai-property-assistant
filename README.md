## AI Property Assistant

An intelligent assistant that helps users inquire about plot/flat availability, pricing, developer details, and project information in a human-friendly way. Built for the **Hope AI Hackathon'25**.

---

## 🔗 Live Project (Reference)
https://realestatedigital.in

---

## 💡 Key Features

- 🧠 **AI Assistant Chatbot** that answers property-related questions
- 🏠 Flat/Plot Search by project name, unit number, and status
- 🗃️ Backend APIs to simulate real-world real estate data
- 💬 LLM integration to generate human-like responses
- 🛠️ Built using Java Spring Boot + React + Tailwind CSS

---

## ⚙️ Tech Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Java 21 + Spring Boot 3.5
- **AI Layer:** OpenAI GPT (or HuggingFace models)
- **Database:** In-memory mock data / static JSON / H2 (for now)
- **Deployment:** Vercel (Frontend), Render (Backend), or local Docker

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
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── tailwind.config.js
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

## 📦 Sample API

```http
GET /api/properties/{unitId}
```
Returns unit info: price, developer name, project name, status

---

## ✨ Contribution Credit

👨‍💻 Built by **Dhanasekar Raju**  
🔗 [LinkedIn](https://linkedin.com/in/dhanasekar-raju-20471341)  
🌐 [RealEstateDigital.in](https://realestatedigital.in)

---

## 📜 License
MIT
