# 🍳 React AI Chef Recipe Generator

An AI-powered Chef Recipe Generator built with React.js that suggests delicious recipes based on ingredients provided by the user.

This project demonstrates modern React.js fundamentals including:
- Components
- Props
- useState Hook
- Event Handling
- Conditional Rendering
- API Integration
- Async/Await
- Component-based Architecture

The application integrates with Hugging Face AI using `@huggingface/inference` and the `meta-llama/Llama-3.1-8B-Instruct` model to generate intelligent chef-style recipe recommendations dynamically.

---

# 🚀 Features

- Add ingredients dynamically
- Generate AI-powered recipes
- Modern React functional components
- React Hooks (`useState`)
- Component communication using props
- Async API integration
- Loading spinner while generating recipes
- Clean and responsive UI
- AI-generated chef recommendations

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- JavaScript (ES6+)
- CSS

## AI Integration
- Hugging Face Inference API
- `@huggingface/inference`
- `meta-llama/Llama-3.1-8B-Instruct`

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/react-ai-recipe-generator.git
```

Navigate into the project:

```bash
cd react-ai-recipe-generator
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the project root:

```env
VITE_HF_TOKEN=your_huggingface_token
```

---

# 🤖 How It Works

1. User enters ingredients
2. React stores ingredients using `useState`
3. User clicks "Get Recipe"
4. API request is sent to Hugging Face AI
5. Llama 3.1 model generates a recipe
6. Recipe is displayed dynamically on the UI

---

# 🧠 React Concepts Used

- Functional Components
- Props
- useState Hook
- Conditional Rendering
- Event Handling
- Form Handling
- Async/Await
- API Calls
- Component Reusability
- State Management Basics

---

# 📸 Future Improvements

- Recipe history
- Dark mode
- Save favorite recipes
- Authentication
- Voice input
- AI image generation for recipes
- Tailwind CSS UI redesign
- Mobile responsive enhancements

---

# 🌐 Deployment

This project can be deployed easily using:

- Vercel
- Netlify

---

# 📚 Learning Outcomes

This project helped strengthen the understanding of:
- Modern React.js fundamentals
- Component architecture
- API integration
- State management
- AI integration in frontend applications
- Async JavaScript workflows

---

# 👨‍💻 Author

Jaimin Patel

Senior Magento & Frontend Developer

---

# ⭐ Project Goal

The purpose of this project is to practice and demonstrate practical React.js skills by building a real-world AI-powered application with dynamic UI interactions and API integrations.
