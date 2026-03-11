from flask import Flask, request, jsonify
from Model import predict
from flask_cors import CORS
import os

app=Flask(__name__)
CORS(app)

@app.route('/predict',methods=['POST'])
def input_api():
    data=request.get_json()
    features=data['features']
    prediction=predict(features)
    return jsonify({'prediction':prediction})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)