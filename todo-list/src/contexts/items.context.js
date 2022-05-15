import { createContext } from "react";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const theme = "dark";

  return <ItemContext.Provider value={theme}>{children}</ItemContext.Provider>;
}

export { ItemContext, ItemProvider };
