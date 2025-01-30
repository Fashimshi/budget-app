import React, { useState } from "react";
import { appendData } from "./googleSheets";

function BudgetForm() {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [savings, setSavings] = useState("");
  const [stocks, setStocks] = useState("");
  const [expenses, setExpenses] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for Google Sheets
    const data = [
      new Date().toLocaleString(), // Timestamp
      income,
      rent,
      savings,
      stocks,
      expenses
    ];

    await appendData(data); // Send data to Google Sheets
    alert("Budget saved to Google Sheets!");

    // Reset form fields after submission
    setIncome("");
    setRent("");
    setSavings("");
    setStocks("");
    setExpenses("");
  };

  return (
    <div>
      <h2>Budget Tracker</h2>
      <form onSubmit={handleSubmit}>
        <label>Income:</label>
        <input 
          type="number" 
          value={income} 
          onChange={(e) => setIncome(e.target.value)} 
          required 
        />

        <label>Rent:</label>
        <input 
          type="number" 
          value={rent} 
          onChange={(e) => setRent(e.target.value)} 
          required 
        />

        <label>Savings:</label>
        <input 
          type="number" 
          value={savings} 
          onChange={(e) => setSavings(e.target.value)} 
          required 
        />

        <label>Stocks:</label>
        <input 
          type="number" 
          value={stocks} 
          onChange={(e) => setStocks(e.target.value)} 
          required 
        />

        <label>Other Expenses:</label>
        <input 
          type="number" 
          value={expenses} 
          onChange={(e) => setExpenses(e.target.value)} 
          required 
        />

        <button type="submit">Save Budget</button>
      </form>
    </div>
  );
}

export default BudgetForm;
