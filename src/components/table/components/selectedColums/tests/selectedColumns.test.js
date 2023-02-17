import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Table } from '../../../table';
import { tableData } from '../../../../../constants/tabledata';

const mockedState = ['name', 'username', 'phone', 'company'];
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('display table initaial data', async () => {
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<Table />
		</Provider>
	);

	const names = tableData.map((item) => {
		expect(screen.queryByText(item.name)).toBeInTheDocument();
	});

	const usernames = tableData.map((item) => {
		expect(screen.queryByText(item.username)).toBeInTheDocument();
	});

	const phones = tableData.map((item) => {
		expect(screen.queryByText(item.phone)).toBeInTheDocument();
	});

	const companies = tableData.map((item) => {
		expect(screen.queryByText(item.company)).toBeInTheDocument();
	});

	const ids = tableData.map((item) => {
		expect(screen.queryByText(item.id)).not.toBeInTheDocument();
	});

	const websites = tableData.map((item) => {
		expect(screen.queryByText(item.website)).not.toBeInTheDocument();
	});

	const addresses = tableData.map((item) => {
		expect(screen.queryByText(item.address)).not.toBeInTheDocument();
	});

	const emails = tableData.map((item) => {
		expect(screen.queryByText(item.email)).not.toBeInTheDocument();
	});
});
