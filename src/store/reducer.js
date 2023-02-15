export const reducer = (state = ['name', 'address', 'phone'], action) => {
	switch (action.type) {
		case 'UPDATE_COLUMNS':
			return action.payload;
		default:
			return state;
	}
};
