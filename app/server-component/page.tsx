type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async (): Promise<Todo[]> => {
  const todosURL = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=14",
    { cache: 'no-store' }
  );
  const todosList = await todosURL.json();
  return todosList;
};

export default async function Todos() {
  const todoListData = await fetchTodos();

  return (
    <div>
      <h1>Todo List With JSON Placeholder and React Server Component</h1>

      <ul>
        {todoListData.map((todo: Todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
