
# 🏠 Airbnb Price Prediction Dashboard 📈

<div align="center">

![Python](https://img.shields.io/badge/python-v3.7+-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.0+-green.svg)
![Machine Learning](https://img.shields.io/badge/ML-XGBoost%20%7C%20CatBoost-orange.svg)


[🚀 Live Demo](#deployment) • [📊 Features](#features) • [🛠️ Installation](#installation) • [📈 Model Performance](#model-performance)

</div>

---

## 🎯 Overview

<div align="center">

![Airbnb Price Prediction Demo](AirBNB_Web.gif)

*Interactive demonstration of the Airbnb Price Prediction Dashboard*

</div>

This project addresses a common challenge faced by Airbnb hosts: **determining optimal pricing for their listings**. New hosts often struggle with pricing decisions, leading to either underpricing (lost revenue) or overpricing (fewer bookings).

### 💡 Solution

Our **Airbnb Price Prediction Dashboard** leverages advanced machine learning algorithms to provide data-driven pricing recommendations. By analyzing extensive historical data from Airbnb listings across multiple countries, the system predicts optimal prices based on:

- **Location factors** (country, city, neighborhood)
- **Property characteristics** (type, size, amenities)
- **Host profile** (experience, response time, reviews)
- **Market conditions** (availability, competition)

### 🎯 Key Benefits

- ✅ **Accurate Predictions**: RMSE of ~£40 on average listing price of £87
- ✅ **User-Friendly Interface**: Intuitive web dashboard for easy price estimation
- ✅ **Global Coverage**: Supports listings across 16 countries
- ✅ **Real-time Processing**: Instant price predictions via REST API
- ✅ **Production Ready**: Dockerized deployment with CI/CD pipeline

---

## ✨ Features

### 🔍 **Advanced Analytics**
- **Exploratory Data Analysis** on 345,467+ listings
- **Feature Engineering** with 50+ predictive variables
- **Model Comparison** across XGBoost, CatBoost, and LightGBM

### 🎨 **Modern Web Interface**
- **Responsive Design** optimized for all devices
- **Interactive Forms** with dynamic dropdowns and sliders
- **Real-time Validation** and user feedback
- **Professional Styling** with Airbnb-inspired design

### 🤖 **Machine Learning Pipeline**
- **Data Preprocessing** with automated cleaning and encoding
- **Hyperparameter Optimization** using Optuna framework
- **Cross-validation** for robust model evaluation
- **Model Persistence** with pickle serialization

### 🚀 **Production Features**
- **REST API** for programmatic access
- **Docker Containerization** for consistent deployment
- **Error Handling** and logging
- **Scalable Architecture** ready for cloud deployment

---

## 🏗️ Technical Architecture

### **Data Pipeline**
```
Raw Data → Cleaning → Feature Engineering → Encoding → Model Training → Deployment
```

### **Model Stack**
- **Primary Model**: XGBoost Regressor (RMSE: £39.83)
- **Backup Model**: CatBoost Regressor (RMSE: £43.37)
- **Preprocessing**: StandardScaler + OneHotEncoder + OrdinalEncoder

### **Technology Stack**
- **Backend**: Flask (Python 3.7+)
- **ML Libraries**: XGBoost, CatBoost, Scikit-learn, Pandas, NumPy
- **Frontend**: HTML5, CSS3, JavaScript (jQuery, Selectize.js)
- **Deployment**: Docker, Heroku, GitHub Actions
- **Visualization**: Matplotlib, Seaborn

---

## 🛠️ Installation

### Prerequisites
- Python 3.7 or higher
- pip package manager
- Git

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/airbnb-predictive-analysis.git
   cd airbnb-predictive-analysis
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the dashboard**
   Open your browser and navigate to `http://localhost:5000`

### Docker Setup

1. **Build the Docker image**
   ```bash
   docker build -t airbnb-price-predictor .
   ```

2. **Run the container**
   ```bash
   docker run -p 5000:5000 airbnb-price-predictor
   ```

---


## 📈 Model Performance

### **Dataset Statistics**
- **Total Listings**: 345,467
- **Countries**: 16 (US, UK, France, Germany, etc.)
- **Features**: 50+ predictive variables
- **Price Range**: £0 - £999 (converted to GBP)

### **Model Comparison**

| Model | RMSE | R² Score | Training Time |
|-------|------|----------|---------------|
| **XGBoost** | £39.83 | 0.72 | ~2 minutes |
| CatBoost | £43.37 | 0.68 | ~3 minutes |
| LightGBM | £42.34 | 0.70 | ~1 minute |

### **Feature Importance (Top 10)**
1. **Accommodates** (0.15) - Number of guests
2. **Bedrooms** (0.12) - Number of bedrooms
3. **Beds** (0.11) - Number of beds
4. **Location Score** (0.09) - Neighborhood rating
5. **Review Rating** (0.08) - Overall guest rating
6. **Property Type** (0.07) - Type of accommodation
7. **Number of Reviews** (0.06) - Review count
8. **Cleanliness Score** (0.05) - Cleanliness rating
9. **Value Score** (0.04) - Value for money rating
10. **Communication Score** (0.04) - Host communication rating

---

## 🚀 Deployment

### Heroku Deployment

1. **Install Heroku CLI**
2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create your-app-name
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

### Docker Deployment

```bash
# Build image
docker build -t airbnb-predictor .

# Run container
docker run -p 5000:5000 -e PORT=5000 airbnb-predictor
```

### Environment Variables
- `PORT`: Application port (default: 5000)
- `FLASK_ENV`: Environment (development/production)

---


## 🔬 Data Science Pipeline

### **1. Data Collection & Cleaning**
- **Source**: Airbnb listing data from multiple countries
- **Cleaning**: Removed outliers, handled missing values
- **Validation**: Ensured data quality and consistency

### **2. Exploratory Data Analysis**
- **Distribution Analysis**: Price patterns across locations
- **Correlation Analysis**: Feature relationships
- **Visualization**: Charts and graphs for insights

### **3. Feature Engineering**
- **Location Encoding**: Country, city, neighborhood mapping
- **Amenity Extraction**: Binary features for property amenities
- **Host Metrics**: Experience, response time, review scores
- **Currency Conversion**: Standardized to GBP

### **4. Model Development**
- **Algorithm Selection**: XGBoost, CatBoost, LightGBM
- **Hyperparameter Tuning**: Optuna optimization
- **Cross-validation**: 5-fold CV for robust evaluation
- **Feature Selection**: Correlation and importance analysis

### **5. Model Deployment**
- **API Development**: RESTful endpoints
- **Web Interface**: User-friendly dashboard
- **Containerization**: Docker for consistent deployment

---

