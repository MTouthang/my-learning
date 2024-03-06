import { useState } from 'react';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useToggleTodoMutation,
} from './api';

const TodoList = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery();

  const [newTodo, setNewTodo] = useState('');
  const [addTodo] = useAddTodoMutation();
  const [toggleTodo] = useToggleTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleAddTodo = async (e) => {
    e.preventDefault();

    try {
      await addTodo({ userId: 1, title: newTodo, completed: false });
      setNewTodo('');
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const handleToggleTodo = async (id, completed) => {
    try {
      await toggleTodo({ id, completed: !completed });
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => handleToggleTodo(todo.id, todo.completed)}>
              {todo.title}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
