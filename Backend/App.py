from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/predict/<int:hp>/<int:sa>/<int:fc>/<int:tc>/<string:state>")
def predict(hp, sa, fc, tc, state):
        model = joblib.load("model.joblib")
        state_mapping = {
            'Goa': [1, 0, 0, 0, 0],
            'Kerala': [0, 1, 0, 0, 0],
            'Rajasthan': [0, 0, 1, 0, 0],
            'Sikkim': [0, 0, 0, 1, 0],
            'West Bengal': [0, 0, 0, 0, 1] 
        }
        
        state_vector = state_mapping.get(state, [0, 0, 0, 0, 0])  
        
        input_data = np.array([[hp, sa, fc, tc] + state_vector])
        
        res = model.predict(input_data)
        
        prediction_result = float(res[0])  
        
        return jsonify({"prediction": prediction_result})  

if __name__ == '__main__':
    app.run(debug=True)
