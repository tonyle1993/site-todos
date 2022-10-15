export interface Todo {
  id: string;
  title: string;
  complete: boolean;
}
export interface AppState {
  todos: Todo[];
  editing: string;
  filter: string;
  filters: (selector: (todo: Todo) => boolean) => Todo[];
}
export const initialState: AppState = {
  todos: [],
  editing: '',
  filter: 'all',
  filters(selector: (todo: Todo) => boolean) {
    return this.todos.filter(selector);
  }
};

export function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
}

export interface AppAction {
  type: string;
  id?: string;
  todoTask?: string;
  storeState?: any;
}

export const AppReducer = (state: AppState, { type, ...args }: any) => {
  const { todos } = state;
  switch (type) {
    case 'INIT': {
      const { storeState } = args;
      return { ...state, ...storeState, editing: '' };
    }
    case 'ADD': {
      const { todoTask } = args;
      const newTodos = todos.concat([
        {
          id: guidGenerator(),
          title: todoTask,
          complete: false
        }
      ]);
      return { ...state, todos: newTodos };
    }
    case 'COMPLETE': {
      const { id } = args;
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
      return { ...state, todos: newTodos };
    }
    case 'REMOVE': {
      const { id } = args;
      const newTodos = todos.slice();
      const removeIndex = newTodos.findIndex(todo => todo.id === id);
      if (removeIndex !== -1) newTodos.splice(removeIndex, 1);
      return { ...state, todos: newTodos };
    }
    case 'FILTER': {
      const { filter } = args;
      return { ...state, filter };
    }
    case 'CLEAR-COMPLETE': {
      return { ...state, todos: state.filters(todo => !todo.complete) };
    }
    case 'EDITING': {
      const { id } = args;
      return { ...state, editing: id };
    }
    case 'EDITED': {
      const { newValue } = args;
      const newTodos = todos.slice();
      const todo = newTodos.find(t => t.id === state.editing);
      if (todo) todo.title = newValue;
      return { ...state, editing: '', todos: newTodos };
    }
    default:
      return state;
  }
};
