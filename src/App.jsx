import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store';
import { tableData } from './constants/tabledata';
import { StyledApp } from './app.styled';
import { Table } from './components/table';

const store = createStore(rootReducer);
store.dispatch({ type: 'GET_TABLE_DATA', payload: tableData });

function App() {
	return (
		<Provider store={store}>
			<StyledApp>
				<Table />
			</StyledApp>
		</Provider>
	);
}

export default App;
