from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class Expense(BaseModel):
    title: str
    amount: float
    category: Optional[str] = None
    date: Optional[datetime] = Field(default_factory=datetime.utcnow)
