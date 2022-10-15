import type { ReactElement } from 'react';
import { useAppContext } from '@/context/AppContext';
import type { Todo } from '@/context/AppReducer';

const Footer = (): ReactElement => {
  const { state, dispatch } = useAppContext();
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{state?.filters((todo: Todo) => !todo.complete).length}</strong>{' '}
        item left
      </span>
      <ul className="filters">
        <li>
          <a
            className={state?.filter === 'all' ? 'selected' : ''}
            href="#/"
            onClick={() => dispatch?.({ type: 'FILTER', filter: 'all' })}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={state?.filter === 'active' ? 'selected' : ''}
            href="#/active"
            onClick={() => dispatch?.({ type: 'FILTER', filter: 'active' })}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={state?.filter === 'complete' ? 'selected' : ''}
            href="#/completed"
            onClick={() => dispatch?.({ type: 'FILTER', filter: 'complete' })}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch?.({ type: 'CLEAR-COMPLETE' })}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
