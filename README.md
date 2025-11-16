# Habit Tracker App with Gamification (Bachelor’s Thesis Project)

A full-stack habit tracking application designed as my Bachelor’s thesis project.  
Developed under the one-on-one mentorship of a senior front-end engineer, this project reflects industry-level practices, clean architecture, and consistent coding standards.

---

## 🚀 Overview

The Habit Tracker App helps users build habits through daily tracking and gamified motivation:

- **User Registration & Profile:** Users can sign up, log in, and view their profile with avatar, account creation date, and mastery points.  
- **Habit Creation & Tracking:** Users create habits (e.g., 15 push-ups/day) and mark them “done” each day. The “done” button can be pressed only once every 24 hours to prevent abuse.  
- **XP & Levels:** Completing habits grants XP to increase levels. Levels start at 1 and rise progressively, encouraging consistent engagement. Users can still progress even with sporadic habit completion.  
- **Mastery & Streaks:** Consecutive daily completions build streaks, earning mastery ranks (Bronze → Silver → Gold). Breaking a streak retains the current mastery but requires rebuilding streaks to progress.  
- **Progress Visualization:** Users can track streaks, levels, and mastery to stay motivated and maintain habits.  

This design balances **flexibility for occasional habit completion** with **incentives for daily consistency**.
This project demonstrates my ability to design and implement a complete web application — **frontend, backend, architecture, deployment-ready structure, and API communication**.

---

## 🎯 Key Learning Outcomes

### **What I learned while building this project**
- Applying **Feature-Sliced Design (FSD)** for scalable frontend architecture  
- Implementing **MVC architecture** on the backend  
- Practical understanding of **CORS**, routing, middleware, validation, and API data flow  
- Structuring clean and maintainable React Typescript code  
- End-to-end flow of form validation, state management, and API communication  
- Building secure authentication with JWT  
- Working with ORMs (**Sequelize**), data modeling, and migrations  
- Industry-like coding workflows (mentor-guided)

---

## 🛠️ Tech Stack

### **Frontend**
- React  
- Typescript
- Material UI (MUI)  
- Redux Toolkit  
- Axios  
- Feature-Sliced Design  

### **Backend**
- Node.js + Express  
- Sequelize ORM + sequelize-cli  
- PostgreSQL
- MVC architecture  
- JWT Authentication  
- CORS configuration  

### **Architecture**
- Monolithic full-stack application  
- Well-structured folders for scalability  
- Clear separation of UI, domain logic, backend controllers, and services  

---

## 📄 Features

### ✔ User Features
- Register & log in  
- Create, update, and delete habits  
- Track daily progress via personalized graphs on profile page  
- Earn levels and mastery through consistent completion  
- Responsive UI  

### ✔ Technical Features
- REST API with structured controllers/services  
- Centralized error handling  
- Protected routes  
- Migration-based database structure  
- State-managed UI  
- Form validation on frontend + backend  

---

## 📚 How to Run the Project

```bash
# 1. Clone the repository
git clone https://github.com/Zaymerstone/Bachelors_Thesis.git

# 2. Install dependencies
cd backend && npm install
cd frontend && npm install

# 3. Environment variables
Create .env files in both frontend and backend folders

# 4. Run Sequelize migrations and seeders
cd backend
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# 5. Run backend
npm run dev

# 6. Run frontend
npm run start

```

### 👤 Author

**Nesterov Egor**  
BSc in Computer Science  
Software Engineer Intern | Full-stack Developer Intern

**Contact:**
- 📧 Email: [egor.nesterov2002@gmail.com](mailto:egor.nesterov2002@gmail.com)  
- 🔗 LinkedIn: [linkedin.com/in/enesterov22](https://www.linkedin.com/in/enesterov22/)  
- 💬 Telegram: [t.me/Zaymerstone](https://t.me/Zaymerstone)
