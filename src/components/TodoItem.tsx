import { useAppContext } from '@/context/AppContext';

export interface TodoItemProps {
  value: any;
}

const TodoItem = ({ value }: TodoItemProps) => {
  const { id, title, complete } = value;
  const { state, dispatch } = useAppContext();
  const onValueChange = () => {
    dispatch?.({ type: 'COMPLETE', id });
  };

  const onRemove = () => {
    dispatch?.({ type: 'REMOVE', id });
  };

  const onEditing = () => {
    dispatch?.({ type: 'EDITING', id });
  };

  const onEditValueChange = (event: any) => {
    const newValue = event.target.value;
    if (event.keyCode === 13 && newValue !== '') {
      dispatch?.({ type: 'EDITED', id, newValue });
    }
  };

  const isEditing = id === state?.editing && state?.editing !== '';

  return (
    <li className={complete ? 'completed' : ''} onDoubleClick={onEditing}>
      <div
        className="view"
        style={isEditing ? { display: 'none' } : { display: 'block' }}
      >
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={complete}
          onChange={onValueChange}
        />
        <label>{title}</label>
        <button className="destroy" onClick={onRemove}></button>
      </div>
      <input
        className="edit"
        style={isEditing ? { display: 'block' } : { display: 'none' }}
        defaultValue={title}
        onKeyDown={onEditValueChange}
      />
    </li>
  );
};

export default TodoItem;
