import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyledApp } from './app.styled';
import { Table } from './components/table';
import { reducer } from './store/reducer';

const store = createStore(reducer);

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
