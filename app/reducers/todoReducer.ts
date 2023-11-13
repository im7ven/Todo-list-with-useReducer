export interface Todo {
  id: number;
  message: string;
  date: string;
  status: boolean;
}

interface AddTodo {
  type: "ADD";
  todo: Todo;
}

interface DeleteTodo {
  type: "DELETE";
  todoId: number;
}

interface CompleteTodo {
  type: "COMPLETE";
  todoId: number;
  status: boolean;
}

type TodoAction = AddTodo | DeleteTodo | CompleteTodo;

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  if (action.type === "ADD") {
    return [action.todo, ...state];
  } else if (action.type === "DELETE") {
    return state.filter((todo) => todo.id !== action.todoId);
  } else if (action.type === "COMPLETE") {
    return state.map((task) =>
      task.id === action.todoId ? { ...task, status: action.status } : state
    ) as Todo[];
  } else {
    return state;
  }
};

export default todoReducer;
