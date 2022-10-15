import { useAppContext } from '@/context/AppContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useAppContext();
  const todos = state?.filters(todo => {
    switch (state.filter) {
      case 'complete':
        return todo.complete;
      case 'active':
        return !todo.complete;
      default:
        return true;
    }
  });
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos?.map(todo => (
          <TodoItem key={todo.id} value={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
