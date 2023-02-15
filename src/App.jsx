import './App.css';
import { Table } from './components/table/table';
import { ModalWindow } from './components/modalWindow/modalWindow';

function App() {
	return (
		<div className='App'>
			<ModalWindow />
			<Table />
		</div>
	);
}

export default App;
