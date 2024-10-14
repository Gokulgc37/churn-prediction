# churn-prediction

It utilizes FastAPI for the backend, HTML and CSS for the frontend.

## Technologies Used

- **Backend:** FastAPI
- **Frontend:** HTML, CSS
- **Data Handling:** Pandas
- **Machine Learning:** Scikit-learn

## Installation

- Create a project directory:
  ```bash
   `mkdir movie-recommendation-system`
   `cd movie-recommendation-system`
  ```
   
- Create the necessary directories and files:  
   mkdir templates static data  
   touch templates/home.html templates/result.html static/style.css data/movies.csv main.py requirements.txt README.md  
   Add your HTML content to home.html, result.html, and your CSS styles to style.css. Populate movies.csv with your movie data.

- Open requirements.txt and add the following dependencies:  
  scikit-learn==1.4.2
numpy
pandas
fastapi
uvicorn
jinja2
pydantic


- Create a virtual environment and activate it:  
   `python3 -m venv myenv`
   `source myenv/bin/activate`  For Windows use `myenv\Scripts\activate`
   
- Install the required packages:
   `pip install -r requirements.txt`
   
-  Run the FastAPI application locally:(ensure it works properly)  
   `uvicorn main:app --host 127.0.0.1 --port 8000`  
   Open your browser and go to http://127.0.0.1:8000 to access the home page.
