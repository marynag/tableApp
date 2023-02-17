import './App.css';
import { Table } from './components/table/table';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store';
import { tableData } from './constants/tabledata';

const store = createStore(rootReducer);
store.dispatch({ type: 'GET_TABLE_DATA', payload: tableData });

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Table />
			</div>
		</Provider>
	);
}

export default App;
