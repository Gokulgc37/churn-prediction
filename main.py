from fastapi import FastAPI , Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the path to your templates directory
templates = Jinja2Templates(directory="templates")

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")


# Load the pre-trained model
model = joblib.load("random_forest_churnpredict_model.pkl")

scaler = joblib.load("scaler.pkl")

# Define the data model for prediction
class ChurnInput(BaseModel):
    feature_1: int
    feature_2: int
    feature_3: int
    feature_4: int
    feature_5: int
    feature_6: int
    feature_7: int
    feature_8: int
    feature_9: int
    feature_10: int
    feature_11: int
    feature_12: int
    feature_13: int
    feature_14: int
    feature_15: int
    feature_16: int
    feature_17: int
    feature_18: int


import logging

logging.basicConfig(level=logging.INFO)

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/predict")
async def predict(input_data: ChurnInput):
    # Prepare the input data array
    data = np.array([[input_data.feature_1, input_data.feature_2, input_data.feature_3,
                      input_data.feature_4, input_data.feature_5, input_data.feature_6,
                      input_data.feature_7, input_data.feature_8, input_data.feature_9,
                      input_data.feature_10, input_data.feature_11, input_data.feature_12,
                      input_data.feature_13, input_data.feature_14, input_data.feature_15,
                      input_data.feature_16, input_data.feature_17, input_data.feature_18]])


    # Standardize the input data using the fitted scaler
    std_data = scaler.transform(data)

    # Make the prediction
    prediction = model.predict(std_data)

    # Prepare the response message
    message = 'The person does not have churn.' if prediction[0] == 0 else 'The person has churn.'

    return {"prediction": message}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)


