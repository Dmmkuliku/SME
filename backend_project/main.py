from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model
model = joblib.load("credit_model_v2.pkl")
scaler = joblib.load("scaler.pkl")


class MLInput(BaseModel):
    payment_delay_days: int
    transaction_consistency: float
    delivery_success_rate: float
    avg_transaction_value: float
    transaction_frequency: int
    complaint_rate: float
    repeat_customer_ratio: float
    region_risk_level: int


@app.get("/")
def home():
    return {"message": "Backend is running"}



@app.post("/api/ml/predict")
def predict(data: MLInput):
    features = np.array([[
        data.payment_delay_days,
        data.transaction_consistency,
        data.delivery_success_rate,
        data.avg_transaction_value,
        data.transaction_frequency,
        data.complaint_rate,
        data.repeat_customer_ratio,
        data.region_risk_level,
    ]])

    features = scaler.transform(features)
    prob = model.predict_proba(features)[0][1]
    score = int((1 - prob) * 100)

    if score > 70:
        risk = "Low"
        decision = "Approve"
    elif score > 50:
        risk = "Medium"
        decision = "Review"
    else:
        risk = "High"
        decision = "Reject"

    return {
        "credit_score": score,
        "risk_level": risk,
        "default_probability": float(prob),
        "decision": decision,
        "top_factors": [
            "payment_delay_days",
            "transaction_consistency",
            "delivery_success_rate"
        ]
    }