def predict_risk(data):
    score = 80

    if data['payment_delay_days'] > 10:
        score -= 20

    if data['transaction_consistency'] < 0.5:
        score -= 10

    if data['delivery_success_rate'] < 0.7:
        score -= 10

    risk = "Low"
    if score < 70:
        risk = "Medium"
    if score < 50:
        risk = "High"

    return {
        "credit_score": score,
        "risk_level": risk,
        "default_probability": round(1 - score/100, 2),
        "decision": "Approve" if score > 70 else "Review",
        "top_factors": ["Payment delay", "Consistency"]
    }
