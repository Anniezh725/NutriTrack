from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow frontend to communicate with backend
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "Welcome to NutriTrack API"
    })


if __name__ == "__main__":
    app.run(debug=True, port=5000)
