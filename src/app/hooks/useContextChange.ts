import { useCallback, useState } from 'react';
import { InitialAppState } from '../utils/context';

const useContextChange = (initialState: InitialAppState) => {
  const [context, changeContext] = useState(initialState);
  const setContext = useCallback((newState: InitialAppState) => {
    changeContext(newState);
  }, []);

  return {
    changeContext: setContext,
    data: context,
  };
};

export default useContextChange;
