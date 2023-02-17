import { tableData } from '../constants/tabledata';

export const getSelectedColumnNames = (state) => state;

export const getAvailableAttributes = (state) => {
	const columnNames = state;
	const attributes = Object.keys(tableData[0]);
	return attributes
		.filter((x) => !columnNames.includes(x))
		.concat(columnNames.filter((x) => !attributes.includes(x)));
};
