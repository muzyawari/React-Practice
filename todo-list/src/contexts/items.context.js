import { useState, useEffect, createContext } from "react";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const [date, setDate] = useState("");

  const [items, setItems] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const value = { date, setDate, items, setItems };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}

export { ItemContext, ItemProvider };
