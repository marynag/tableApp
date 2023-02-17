export const tableDataReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_TABLE_DATA':
			return action.payload;
		default:
			return state;
	}
};
