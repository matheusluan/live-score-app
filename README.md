# Frontend Coding Challenge – Live Scores Simulation

## 💡 Introduction
This project is a **Live Scores Simulation** web application that displays football match data in real time. The app simulates integration with a third-party provider and allows users to filter matches by status and view detailed match information such as scores, teams, league, and country.  

The live demo of the website is available here: [https://live-score-app-h76q.vercel.app/](https://live-score-app-h76q.vercel.app/)  

---

## 📦 Technologies Used
- **Next.js** – React framework for modern web applications  
- **TypeScript** – Strong typing for safer code  
- **React.js** – Main library for building UI  
- **Styled Components** – Component-based styling  
- **date-fns** – Date formatting  

---

## 🗂 Project Structure

\`\`\`
/components
  ├── container.tsx
  ├── filters.tsx
  └── match-card.tsx
/data
  └── sports.json
/pages
  └── index.tsx
/types
  └── match.ts
/styles
  └── global.ts
\`\`\`

---

## 📄 Features

### 1. Match Display
- Each match is displayed in a **card** showing:
  - Country
  - League/competition
  - Status (LIVE, RESULT, UPCOMING, CANCELED)
  - Current score
  - Team names
  - Visual progress indicator (circular progress)

### 2. Match Status
- **LIVE** – `status.type === inprogress`  
- **RESULT** – `status.type === finished`  
- **UPCOMING** – `status.type === notstarted`  
- **CANCELED** – `status.type === canceled`  

### 3. Filters
- **ALL** – Shows all matches  
- **LIVE** – Only matches in progress  
- **RESULT** – Only finished matches  
- **UPCOMING** – Only upcoming matches  
- Each filter shows a **count of matches**  

---

## 🎨 Design
- Font used: [Barlow](https://fonts.google.com/specimen/Barlow)  
- Fully responsive layout  
- Match progress indicator:
  - Fulltime (100% filled)
  - Halftime (50% filled)
  - Upcoming or canceled matches (0%)

---

## ⚙️ Installation and Usage

### Prerequisites
- Node.js >= 18  
- npm or yarn  

### Installation
\`\`\`bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
# or
yarn install
\`\`\`

### Running the Project
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`
Open in browser: \`http://localhost:3000\`  

Or access the live demo here: [https://live-score-app-h76q.vercel.app/](https://live-score-app-h76q.vercel.app/)

---


