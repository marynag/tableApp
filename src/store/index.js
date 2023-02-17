import { combineReducers } from 'redux';
import { columnNamesReducer } from './clomnNames/reducer';
import { tableDataReducer } from './tableData/reducer';

export const rootReducer = combineReducers({
	tableData: tableDataReducer,
	columnNames: columnNamesReducer,
});
