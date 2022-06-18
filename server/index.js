const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());

app.use(express.json());

// Routes

// Create a todo

app.post("/todos", async (req, res) => {
  try {
    const { title, description, time_due } = req.body;

    const newToDo = await pool.query(
      "INSERT INTO todo(title) VALUES($1) RETURNING *",
      [title]
    );
    res.json(newToDo.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (e) {
    console.error(e.message);
  }
});
// Get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET completed=$1 WHERE id = $2",
      [completed, id]
    );
    res.json("Todo was updated");
  } catch (e) {
    console.error(e.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted");
  } catch (e) {
    console.error(e.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
