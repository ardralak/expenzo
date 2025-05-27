from fastapi import APIRouter, HTTPException
from app.models import Expense
from app.db import expenses_collection

router = APIRouter()

@router.post("/expenses")
async def add_expense(expense: Expense):
    result = await expenses_collection.insert_one(expense.dict())
    return {"message": "Expense added", "id": str(result.inserted_id)}

@router.get("/expenses")
async def get_expenses():
    expenses = []
    async for expense in expenses_collection.find():
        expense["_id"] = str(expense["_id"])  # convert ObjectId to string
        expenses.append(expense)
    return expenses
