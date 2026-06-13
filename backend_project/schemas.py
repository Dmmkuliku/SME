from pydantic import BaseModel

class LoginRequest(BaseModel):
    email: str
    password: str

class Transaction(BaseModel):
    amount: float
    payment_delay_days: int
    delivery_success: int

class MLInput(BaseModel):
    payment_delay_days: int
    transaction_consistency: float
    delivery_success_rate: float
