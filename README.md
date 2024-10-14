## churn-prediction

## overview
Developed a web-based application for predicting customer churn in an e-commerce platform. The application consists of three main components: a trained machine learning model, a FastAPI backend, and a frontend built with HTML, CSS, and JavaScript.

## Problem Statement
The goal is to predict customer churn in an e-commerce platform by analyzing various factors influencing customer retention. Understanding the characteristics of customers who are likely to churn can help the organization implement targeted strategies to enhance customer satisfaction and loyalty.

## Project Goals
- Predict Customer Churn: Develop an accurate machine learning model that predicts whether a customer will churn based on various input features.
  
- Data Insights: Analyze the dataset to identify key factors influencing customer churn, helping stakeholders understand customer behavior.
  
- User-Friendly Interface: Create an intuitive and responsive web interface that allows users to easily input customer data for churn predictions.
  
- Seamless Integration: Implement a FastAPI backend that efficiently integrates the machine learning model with the frontend, enabling real-time predictions.

## Table of Contents
1. [Data information](#Datainformation)
2. [Technologies Used](#technologies-used)
3. 

## Data information

This dataset contains information like    

E Comm CustomerID - Unique customer ID.    

E Comm Churn - Churn flag (indicator of whether a customer has churned).    

E Comm Tenure - Duration of a customer's relationship with the organization.    

E Comm PreferredLoginDevice - The device that a customer most often uses to log in.    

E Comm CityTier - The tier of the city in which the customer lives.    

E Comm WarehouseToHome - The distance from the warehouse to the customer's home.    

E Comm PreferredPaymentMode - The customer's preferred payment method.    

E Comm Gender - The gender of the customer.    

E Comm HourSpendOnApp - The number of hours the customer spends on the mobile application or website.    

E Comm NumberOfDeviceRegistered - The total number of devices registered for a particular customer.    

E Comm PreferedOrderCat - The category of items that a customer most often ordered last month.    

E Comm SatisfactionScore - The customer's satisfaction score for the service.    

E Comm MaritalStatus - The marital status of the customer.    

E Comm NumberOfAddress - The total number of addresses registered for a particular customer.    

E Comm Complain - An indicator of whether the customer raised any complaints last month.    

E Comm OrderAmountHikeFromlastYear - The percentage increase in the order amount from last year.    

E Comm CouponUsed - The total number of coupons used by a customer last month.    

E Comm OrderCount - The total number of orders placed by a customer last month.    

E Comm DaySinceLastOrder - The number of days since the customer's last order.    

E Comm CashbackAmount - The average cashback amount the customer received last month.    


## Technologies Used

- **Backend:** FastAPI
- **Frontend:** HTML, CSS, JS
- **Data Handling:** Pandas
- **Machine Learning:** Scikit-learn

## Components
1. **Jupyter Notebooks**
   - Model Training: Used to preprocess data, train the churn prediction model, and evaluate its performance.
   - Model Saving: The trained model is saved as a .pkl file for later use.
2. **FastAPI Backend**
   - API Creation: FastAPI is used to create an API that serves the prediction model.
   - Endpoints:
     - Prediction Endpoint: Receives customer data inputs, processes them, and returns the churn prediction.
   - Model Loading: Loads the saved model to make predictions.
3. **Frontend (HTML, CSS, JavaScript)**
   - User Interface: A responsive web interface allows users to input customer data.
   - Input Form: Contains fields for all relevant features (e.g., CustomerID, tenure, preferred login device, etc.) to collect necessary data for prediction.
   - Result Display: Shows the prediction results, such as whether the customer is likely to churn or not.

## Workflow
Data Input: Users enter customer information via the frontend form.
API Request: The frontend sends a request to the FastAPI backend with the input data.
Prediction: The backend processes the input data using the loaded model and makes a prediction.
Response: The backend returns the prediction result to the frontend.
Result Display: The frontend displays the prediction result to the user.
