import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Table } from '../../table/table';
import React from 'react';
import App from '../../../App';
import { ModalWindow } from '../modalWindow';

const mockedState = ['name', 'username', 'phone', 'company'];
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('display ModalWindow component', async () => {
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<ModalWindow />
		</Provider>
	);
	const modalWindow = getByTestId('modalWindow');
	expect(modalWindow).toBeInTheDocument();
});
