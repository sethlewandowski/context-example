import { createContext } from 'react';

export const SharedContext = createContext({
	context: 0,
	setContext: (number) => {}
});
