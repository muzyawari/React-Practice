import { useState, createContext } from "react";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const [date, setDate] = useState("");

  const [items, setItems] = useState([]);

  return (
    <ItemContext.Provider value={{ date, setDate, items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
}

export { ItemContext, ItemProvider };
