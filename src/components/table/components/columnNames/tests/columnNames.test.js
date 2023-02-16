import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Table } from '../../../table';

const mockedState = ['name', 'username', 'phone', 'company'];
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('display table initaial columnNames', async () => {
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<Table />
		</Provider>
	);

	const state = mockedStore.getState();

	state.map((item) => {
		expect(screen.queryByText(item.toUpperCase())).toBeInTheDocument();
	});
});

test('display amount of ColumnNames equal length of columns in state', async () => {
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<Table />
		</Provider>
	);

	const state = mockedStore.getState();

	const columns = getByTestId('tableWrapper');
	const columnNames = within(columns).getAllByTestId('columnName');
	const columnsAmount = state.length;
	expect(columnNames.length).toBe(columnsAmount);
});
