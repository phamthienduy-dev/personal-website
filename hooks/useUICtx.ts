import { UICtx } from 'pages/_app';
import { useContext } from 'react';

export const useUICtx = () => {
  return useContext(UICtx);
};
