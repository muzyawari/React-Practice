import { useState, useEffect, createContext } from "react";

const ItemContext = createContext();

function ItemProvider({ children }) {
  const [date, setDate] = useState("");

  const [items, setItems] = useState([]);

  // Load Todo and set to state
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      console.log(jsonData);
      setItems(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    // Load Todo on render
    getTodos();
  }, []);

  // Remove Todo
  const handleRemoveItem = async (id) => {
    const removeItem = items.filter((item) => {
      return item.id !== id;
    });

    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setItems(removeItem);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Complete Todo
  const handleStrikeItem = async (id) => {
    const filter = items
      .filter((item) => item.id !== id)
      .concat(
        items.filter((item) => {
          return item.id === id;
        })
      );

    const complete = filter.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: true,
        };
      }
      return item;
    });

    setItems(complete);

    const finish = true;

    updateToDoComplete(id, finish);
  };

  // Update Todo
  const updateToDoComplete = async (id, item) => {
    try {
      const updateTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: item,
        }),
      });
      console.log(updateTodo);
    } catch (e) {
      console.error(e.message);
    }
  };

  // Undo complete
  const handleUndoItem = async (id) => {
    const filter = items
      .filter((item) => item.id !== id)
      .concat(
        items.filter((item) => {
          return item.id === id;
        })
      );

    const complete = filter.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: false,
        };
      }
      return item;
    });

    setItems(complete);

    const finish = false;
    updateToDoComplete(id, finish);
  };

  // Add date to items state
  const handleDateAdd = async (id) => {
    const dateAdd = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          timestamp: date,
        };
      }
      return item;
    });

    setItems(dateAdd);
  };

  const value = {
    date,
    setDate,
    items,
    setItems,
    handleRemoveItem,
    handleStrikeItem,
    handleUndoItem,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}

export { ItemContext, ItemProvider };
