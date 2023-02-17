import { initialValue } from './initialValue';

export const columnNamesReducer = (state = initialValue, action) => {
	switch (action.type) {
		case 'UPDATE_COLUMNS':
			return action.payload;
		default:
			return state;
	}
};
