import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Table } from '../table';

const mockedState = ['name', 'username', 'phone', 'company'];
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('display table component', async () => {
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<Table />
		</Provider>
	);
	const courses = getByTestId('tableWrapper');
	expect(courses).toBeInTheDocument();
});

test('Not to display table if state array length is 0 in Courses', async () => {
	mockedStore.getState().length = 0;
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<Table />
		</Provider>
	);

	const column = screen.queryByTestId('selectedColumn');
	expect(column).not.toBeInTheDocument();
});
