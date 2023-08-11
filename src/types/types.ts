export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (todo: string) => Promise<void>;
  editTodo: (id: number, todo: string, isCompleted: boolean) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}
