import './App.css';
import { Table } from './components/table/table';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './store/reducer';

const store = createStore(reducer);

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
