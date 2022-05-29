import { useContext } from "react";

import Todo from "./components/main/todo";

import { ItemContext } from "./contexts/items.context";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const { items, setItems } = useContext(ItemContext);

  function handleOnDragEnd(result) {
    const lists = Array.from(items);

    const [reorderedItem] = lists.splice(result.source.index, 1);

    lists.splice(result.destination.index, 0, reorderedItem);

    console.log(lists);

    setItems(lists);
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div
            className="container mt-32 m-8 bg-slate-200"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Todo />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
