import React, { useState } from "react";
import Login from "./Login";
import BudgetForm from "./BudgetForm";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Budget Manager</h1>
      <Login setUser={setUser} />
      {user && <BudgetForm />}
    </div>
  );
}

export default App;
