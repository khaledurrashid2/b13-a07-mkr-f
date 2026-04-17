# KeenKeeper - a React application for keeping up with our friends network


## 🚀 Project Overview

KeenKeeper is a streamlined web application to keep the relationships with friends.

## 🛠️ Technologies Used

- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first styling
- **daisyUI** - Visual library for Tailwind
- **React Router DOM** - Routing for Single Page Applications
- **React Hot Toast** - Lightweight notifications
- **Recharts** - Charting library for data visualization

## ✨ Key Features

1. **Interactive Data Visualization**
   Utilizes **Recharts** to provide pi charts.

2. **Streamlined Navigation & Routing**
   Integrated with **React Router DOM** to build this Single Page Application. 

3. **Sophisticated UI/UX with Real-time Feedback**
   Built using **daisyUI** and **React Hot Toast**.

4. **User data in JSON Format**
   Sample user data has been generated using ChatGPT.

## 📦 Solution to the broken route issue on Netlify and other online hosts:

To ensure routes like /stats or /friend/:id work correctly after deployment, this project includes a _redirects file in the public folder:

    /* /index.html  200