import { render, screen, waitFor, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import { SelectingForm } from '../selectingForm';
import { ModalWindow } from '../../../modalWindow';
import userEvent from '@testing-library/user-event';
import { tableData } from '../../../../../constants/tabledata';

const mockedState = ['name', 'username', 'phone'];
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('Amount selected columns equal to state length', async () => {
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<SelectingForm setopen={true} />
		</Provider>
	);
	const state = mockedStore.getState();
	const selectingForm = getByTestId('selectingForm');
	const selectedColumns =
		within(selectingForm).getAllByTestId('selectedColumns');
	const columnsAmount = state.length;
	expect(selectedColumns.length).toBe(columnsAmount);
});

test('Amount avaliable columns equal to difference state length with selected columns', async () => {
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<SelectingForm setopen={true} />
		</Provider>
	);

	const selectedColumnsAmount = mockedStore.getState().length;
	const allColumnsAmount = Object.keys(tableData[0]).length;
	const selectingForm = getByTestId('selectingForm');
	const avaliableColumns =
		within(selectingForm).getAllByTestId('avaliableColumns');

	expect(avaliableColumns.length).toBe(
		allColumnsAmount - selectedColumnsAmount
	);
});

test('display selectingForm after click', async () => {
	mockedStore.getState().length = 0;
	const { getAllByTestId, getByTestId } = render(
		<Provider store={mockedStore}>
			<ModalWindow />
		</Provider>
	);

	const button = screen.queryByTestId('moduleButton');
	userEvent.click(button);
	await waitFor(() => {
		expect(screen.queryByTestId('selectingForm')).toBeInTheDocument();
	});
});
