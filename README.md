## churn-prediction

## overview
Developed a web-based application for predicting customer churn in an e-commerce platform. The application consists of three main components: a trained machine learning model, a FastAPI backend, and a frontend built with HTML, CSS, and JavaScript.

## Problem Statement
The goal of this project is to build a machine learning model that predicts customer churn in an E-commerce platform based on various customer-related features. The system should provide an API using FastAPI to serve the model, allowing users to submit customer data and receive a prediction on whether a customer is likely to churn or not.


## Project Goals
- Predict Customer Churn: Develop an accurate machine learning model that predicts whether a customer will churn based on various input features.
  
- Data Insights: Analyze the dataset to identify key factors influencing customer churn, helping stakeholders understand customer behavior.
  
- User-Friendly Interface: Create an intuitive and responsive web interface that allows users to easily input customer data for churn predictions.
  
- Seamless Integration: Implement a FastAPI backend that efficiently integrates the machine learning model with the frontend, enabling real-time predictions.

## Table of Contents
1. [Data information](#Datainformation)
2. [Technologies Used](#technologies-used)
3. [Components](#Components)
4. [Workflow](#Workflow)
5. [Installation and setup](#Installationandsetup)

## Data information

This dataset contains :

| Column                     | Description                                                                  |
|----------------------------|------------------------------------------------------------------------------|
| CustomerID                 | Unique customer ID                                                           |
| Churn                      | Churn flag (indicator of whether a customer has churned)                     |
| Tenure                     | Duration of a customer's relationship with the organization                  |
| PreferredLoginDevice       | The device that a customer most often uses to log in                         |
| CityTier                   | The tier of the city in which the customer lives                             |
| WarehouseToHome            | The distance from the warehouse to the customer's home                       |
| PreferredPaymentMode       | The customer's preferred payment method                                      |
| Gender                     | The gender of the customer                                                   |
| HourSpendOnApp             | The number of hours the customer spends on the mobile application or website |
| NumberOfDeviceRegistered   | The total number of devices registered for a particular customer             |
| PreferedOrderCat           | The category of items that a customer most often ordered last month          |
| SatisfactionScore          | The customer's satisfaction score for the service                            |
| MaritalStatus              | The marital status of the customer                                           |
| NumberOfAddress            | The total number of addresses registered for a particular customer           |
| Complain                   | An indicator of whether the customer raised any complaints last month        |
| OrderAmountHikeFromlastYear | The percentage increase in the order amount from last year                  |
| CouponUsed                 | The total number of coupons used by a customer last month                    |
| OrderCount                 | The total number of orders placed by a customer last month                   |
| DaySinceLastOrder          | The number of days since the customer's last order                           |
| CashbackAmount             | The average cashback amount the customer received last month                 |


## Technologies Used

- **Backend:** FastAPI (for creating the API)
- **Frontend:** HTML, CSS, JS
- **Data Handling:** Pandas
- **Machine Learning:** Scikit-learn
- **Web Server:** Uvicorn (for serving the FastAPI application)

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
1.**Data Input**: Users enter customer information via the frontend form.
2.**API Request**: The frontend sends a request to the FastAPI backend with the input data.
3.**Prediction**: The backend processes the input data using the loaded model and makes a prediction.
4.**Response**: The backend returns the prediction result to the frontend.
5.**Result Display**: The frontend displays the prediction result to the user.

## Installation and setup
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository

2. Set up a virtual environment and install dependencies:
  ```bash
    python -m venv env
    source env/bin/activate
  ```
3. Install Dependencies:
```bash
    pip install -r requirements.txt.
```

4. Start the FastAPI application:
 ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8080
```
   Access the application at http://localhost:8080. Ensure it works well locally (update the fetch location in the JavaScript file to http://localhost:8080/predict or http://127.0.0.1:8080/predict).

## Usage Instructions
  - Frontend Access: Once the app is running, open a web browser and go to:
    ```bash
      http://localhost:8000
    ```
  - Input Customer Data: Fill in the input form with customer details.
  - Get Prediction: Click on the "Predict" button to see the result.

## Future Work
  - Deployment: Plan to deploy the application on a AWS cloud platform ensuring scalability and accessibility.
  - Integration: Look into integrating the application with other services or APIs for a more robust user experience.
  - Documentation: Improve documentation with deployment steps and user guides once the application is deployed.
