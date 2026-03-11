# House Rent Prediction Web App

A full-stack machine learning web application that predicts house rent based on property features such as BHK, size, number of bathrooms, furnishing status, and location.

The project consists of a **React frontend** and a **Flask backend API** serving a linear regression model trained from scratch using gradient descent.


## Live Demo

Frontend:  
https://your-vercel-url


## Features

- Predict house rent based on property details
- Simple and responsive user interface
- Linear regression model implemented from scratch
- One-hot encoding for location features
- Flask REST API for model inference
- Full deployment using Vercel (frontend) and Render (backend)

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Backend
- Python
- Flask
- NumPy

### Deployment
- Vercel (Frontend)
- Render (Backend API)

---

## Model

The prediction model is a **Linear Regression model implemented from scratch using gradient descent**.

### Input Features

- BHK
- Size
- Number of Bathrooms
- Furnishing Status
- Location (One-Hot Encoded)

The trained model parameters are stored as `.npy` files:
w.npy
bias.npy
mean.npy
std.npy

During prediction:

1. The frontend sends property details to the backend API
2. Numerical features are scaled using saved mean and standard deviation
3. The prediction is computed using the linear regression equation

prediction = w · x + b


---

## Running Locally

### Backend

'''bash
cd server
pip install -r requirements.txt
python app.py

### Frontend
cd client
npm install
npm run dev

