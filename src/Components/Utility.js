import { createContext } from 'react';

const colors = {
	orange: '#A39161',
	black: '#000',
	white: '#FFF',
	grey: '#E1E1E1',
	darkgrey: '#706c71',
	lessdarkgrey: '#c0c0c0',
};

const ColorContext = createContext(colors);

export { colors, ColorContext };
