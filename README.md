# Task App (Dockerized Full-Stack)

A full-stack task management application with a containerized frontend and backend, using Firebase Firestore for persistence and Docker Compose for orchestration.

This project demonstrates real-world practices such as clean separation of concerns, secure secret handling, and reproducible local development using Docker.

---

## Features

- Create and delete tasks
- All-day tasks or time-bound tasks (start & end time)
- Color-coded tasks
- Persistent storage using Firebase Firestore
- Dynamic frontend updates
- Fully Dockerized frontend and backend
- One-command startup using Docker Compose

---

## Tech Stack

### Frontend
- HTML
- CSS
- Vanilla JavaScript
- Nginx (Dockerized static hosting)

### Backend
- Node.js
- Express.js
- Firebase Admin SDK

### DevOps / Tooling
- Docker
- Docker Compose
- Git & GitHub

---

## Project Structure

# Task App (Dockerized Full-Stack)

A full-stack task management application with a containerized frontend and backend, using Firebase Firestore for persistence and Docker Compose for orchestration.

This project demonstrates real-world practices such as clean separation of concerns, secure secret handling, and reproducible local development using Docker.

---

## Features

- Create and delete tasks
- All-day tasks or time-bound tasks (start & end time)
- Color-coded tasks
- Persistent storage using Firebase Firestore
- Dynamic frontend updates
- Fully Dockerized frontend and backend
- One-command startup using Docker Compose

---

## Tech Stack

### Frontend
- HTML
- CSS
- Vanilla JavaScript
- Nginx (Dockerized static hosting)

### Backend
- Node.js
- Express.js
- Firebase Admin SDK

### DevOps / Tooling
- Docker
- Docker Compose
- Git & GitHub

---

## Security & Environment

- Firebase service account credentials are NOT committed to GitHub
- The key file exists only locally at:


---

## Security & Environment

- Firebase service account credentials are NOT committed to GitHub
- The key file exists only locally at:

backend/serviceAccountKey.json


- The file is ignored using `.gitignore`
- Docker injects the key securely using a volume mount

You must generate your own Firebase service account key to run this project.

---

## Getting Started (Local Setup)

### Prerequisites

- Docker Desktop installed
- Firebase project with Firestore enabled
- Firebase Admin SDK service account key

---

### 1. Clone the repository

git clone https://github.com/AadityaBhure/task-app-dockerised.git

cd task-app-dockerised


---

### 2. Add Firebase service account key

Place your Firebase Admin SDK key here:

backend/serviceAccountKey.json


Do NOT commit this file.

---

### 3. Run the app using Docker Compose

docker compose up --build

---

### 4. Open the application

Frontend:
http://localhost:3000


Backend API:
http://localhost:5000/tasks


---

## API Endpoints

GET /tasks  
POST /tasks  
DELETE /tasks/:id  

---

## Docker Overview

- Frontend runs inside an Nginx container
- Backend runs inside a Node.js container
- Firebase key is injected via Docker volume
- Services are orchestrated using Docker Compose
- Containers can be started/stopped via Docker Desktop UI

---

## Why This Project

This project focuses on real-world development practices:
- Clean frontend-backend separation
- Secure secret handling
- Docker-first workflow
- Reproducible local environments
- Proper Git hygiene and push protection awareness

---

## Possible Improvements

- Edit/update tasks
- Task categories and filters
- Firebase Authentication
- React frontend
- Cloud deployment
- CI/CD pipeline

---

## Author

Aaditya Bhure  
GitHub: https://github.com/AadityaBhure

---

## Final Note

This project was built to practice real-world full-stack development patterns without heavy frameworks.  
Everything runs locally with a single Docker command and follows best practices for security and maintainability.



