import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react';
import { AppReducer, AppState, initialState } from './AppReducer';

export const StoreKey = 'myTodos';

export interface AppContextType {
  state?: AppState;
  dispatch?: Dispatch<any>;
}

const defaultContext: AppContextType = {};
export const AppContext = createContext(defaultContext);

export interface AppWrapperProps {
  children: any;
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  // const [appState, setAppState] = useState({});
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    const storeState = localStorage.getItem(StoreKey);
    if (storeState) {
      dispatch({ type: 'INIT', storeState: JSON.parse(storeState) });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(StoreKey, JSON.stringify(state));
    }
  }, [state]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
