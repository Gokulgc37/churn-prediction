async function makePrediction(event) {
    event.preventDefault(); 

    // Get input values
    const feature_1 = document.getElementById('feature_1').value;
    const feature_2 = document.getElementById('feature_2').value;
    const feature_3 = document.getElementById('feature_3').value;
    const feature_4 = document.getElementById('feature_4').value;
    const feature_5 = document.getElementById('feature_5').value;
    const feature_6 = document.getElementById('feature_6').value;
    const feature_7 = document.getElementById('feature_7').value;
    const feature_8 = document.getElementById('feature_8').value;
    const feature_9 = document.getElementById('feature_9').value;
    const feature_10 = document.getElementById('feature_10').value;
    const feature_11 = document.getElementById('feature_11').value;
    const feature_12 = document.getElementById('feature_12').value;
    const feature_13 = document.getElementById('feature_13').value;
    const feature_14 = document.getElementById('feature_14').value;
    const feature_15 = document.getElementById('feature_15').value;
    const feature_16 = document.getElementById('feature_16').value;
    const feature_17 = document.getElementById('feature_17').value;
    const feature_18 = document.getElementById('feature_18').value;


    const data = {
        feature_1: parseInt(feature_1),
        feature_2: parseInt(feature_2),
        feature_3: parseInt(feature_3),
        feature_4: parseInt(feature_4),
        feature_5: parseInt(feature_5),
        feature_6: parseInt(feature_6),
        feature_7: parseInt(feature_7),
        feature_8: parseInt(feature_8),
        feature_9: parseInt(feature_9),
        feature_10: parseInt(feature_10),
        feature_11: parseInt(feature_11),
        feature_12: parseInt(feature_12),
        feature_13: parseInt(feature_13),
        feature_14: parseInt(feature_14),
        feature_15: parseInt(feature_15),
        feature_16: parseInt(feature_16),
        feature_17: parseInt(feature_17),
        feature_18: parseInt(feature_18)
    };
    

    // Make the POST request to FastAPI //if we run in on cloud use http://our-ec2-public-ip:8080/predict
    const response = await fetch("http://18.144.100.27:8080/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) 
    });
       
    

    // Check if the response is okay
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData); // Log the full error data
        
        // Check if the error has a message or details property to display
        const errorMessage = errorData.detail || JSON.stringify(errorData);
        document.getElementById('result').textContent = `Error: ${errorMessage}`;
        return; // Stop execution if there's an error
    }


    // Parse the JSON response
    const result = await response.json();

    console.log(data);  // Add this line to check the input data

    
    // Display the prediction result
    document.getElementById('result').textContent = `Predicted churn : ${result.prediction}`;
}
