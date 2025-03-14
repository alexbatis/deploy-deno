type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Force the page to be server-rendered on every request
export const dynamic = 'force-dynamic';

const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const todosURL = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=14",
      { cache: 'no-store' }
    );
    
    if (!todosURL.ok) {
      throw new Error(`Failed to fetch todos: ${todosURL.status}`);
    }
    
    const todosList = await todosURL.json();
    return todosList;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return []; // Return empty array or handle error appropriately
  }
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
