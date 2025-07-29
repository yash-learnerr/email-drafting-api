# 📧 Email Drafting API

An Express.js-based API that uses **LangChain** and **Groq** to generate professional emails from brief summaries.

## 🚀 Features

- Accepts a summary and returns a professionally drafted email.
- Uses Groq LLM (`llama-3.1-8b-instant`) via LangChain.
- Clean modular architecture with Express routing and service layers.

---

## 📦 Tech Stack

- **Node.js** + **Express.js** – API backend
- **LangChain** – Prompt & LLM orchestration
- **GroqCloud** – LLM provider
- **dotenv** – For environment variables

---

## 📁 Project Structure

```
project/
│
├── routes/
│ └── email.js # Route to handle /generate-email
│
├── services/
│ └── emailService.js # Uses LangChain + Groq to generate the email
│
├── .env # Environment config (GROQ_API_KEY, PORT)
├── server.js # Main entry point
└── package.json
```

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/email-drafting-api.git
cd email-drafting-api

```

### 2. Install dependencies

```
npm install
```

### 3. Create a .env file

```
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

### 4. Start the server

```
node server.js
```

Server will run at:
`http://localhost:5000`

## 📬 API Usage

### Endpoint

```
POST /generate-email
```

### Request Body

```
{
  "summary": "Schedule a meeting with the client next week to discuss project milestones."
}
```

### Response

```
{
  "email": "Dear [Client],\n\nI hope this message finds you well. I would like to schedule a meeting with you next week to discuss our project milestones..."
}
```

## 🔍 Example cURL Request

```
curl -X POST http://localhost:5000/generate-email \
  -H "Content-Type: application/json" \
  -d '{"summary": "Follow up with HR about the onboarding documents."}'
```

## Video Tutorial

[Example Link](https://jam.dev/c/d9373ce0-7e41-49b9-aad8-4eec67566c66)


## 📄 License

MIT License — free to use, modify, and share.

## ✨ Credits

- GroqCloud
- LangChainJS
- Express.js
