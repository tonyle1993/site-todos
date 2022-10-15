import React, { ReactElement } from 'react';
import { useAppContext } from '@/context/AppContext';

const Header = (): ReactElement => {
  const { dispatch } = useAppContext();
  const onKeyDown = (event: any): void => {
    const value = event.target.value;
    if (event.keyCode === 13 && value !== '') {
      dispatch?.({ type: 'ADD', todoTask: value });
      event.target.value = '';
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={onKeyDown}
      />
    </header>
  );
};

export default Header;
