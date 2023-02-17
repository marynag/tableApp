import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	StyledInput,
	StyledRemovingAttribute,
	StyledSelectedAttribute,
	StyledSelectingBox,
	StyledSelectingColumn,
	StyledSelectingFormWrapper,
} from './selectingForm.styled';
import { StyledButton } from '../../../common/common.styled';
import {
	getAvailableAttributes,
	getSelectedColumnNames,
} from '../../../../store/selectors';
import { UPDATE_COLUMNS } from '../../../../store/actionTypes';

export const SelectingForm = (props) => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();
	const selectedAttributes = useSelector(getSelectedColumnNames);
	const [selectedColumns, setSelectedColumns] = useState(selectedAttributes);

	const attributes = useSelector(getAvailableAttributes);
	const [avaliableColumns, setAvaliableColumns] = useState(attributes);

	const filteredAvaliableColumns = avaliableColumns.filter((item) =>
		item.toLowerCase().includes(input.toLowerCase())
	);

	const handleChangeInput = (event) => {
		setInput(event.target.value);
	};

	const dragEndHandler = (e, column) => {
		const temp = [...selectedColumns];
		temp.push(column);

		const avaliableColumnsFiltered = avaliableColumns.filter(
			(item) => item !== column
		);
		setAvaliableColumns(avaliableColumnsFiltered);
		setSelectedColumns(temp);
	};

	const handleClickApply = () => {
		dispatch({ type: UPDATE_COLUMNS, payload: selectedColumns });
		props.setOpen(false);
	};

	const handleSelectColumn = (selectedColumn) => {
		const temp = [...avaliableColumns];
		temp.push(selectedColumn);
		setAvaliableColumns(temp);

		const selectedColumnsFiltered = selectedColumns.filter(function (item) {
			return item !== selectedColumn;
		});
		setSelectedColumns(selectedColumnsFiltered);
	};
	return (
		<StyledSelectingFormWrapper data-testid='selectingForm'>
			<StyledInput
				type='text'
				value={input}
				placeholder='Search available columns...'
				onChange={handleChangeInput}
			/>
			<StyledSelectingColumn>
				<StyledSelectingBox>
					<p>Avaliable columns</p>
					{filteredAvaliableColumns.map((item) => {
						return (
							<StyledSelectedAttribute
								key={item}
								onDragEnd={(e) => dragEndHandler(e, item)}
								draggable={true}
								data-testid='avaliableColumns'
							>
								<p>{item.toUpperCase()}</p>
							</StyledSelectedAttribute>
						);
					})}
				</StyledSelectingBox>
				<StyledSelectingBox>
					<p>Selected columns</p>
					{selectedColumns.map((item) => {
						return (
							<StyledSelectedAttribute
								key={item}
								onDragEnd={(e) => dragEndHandler(e)}
							>
								<p data-testid='selectedColumns'>{item.toUpperCase()}</p>
								<StyledRemovingAttribute
									onClick={() => handleSelectColumn(item)}
								>
									x
								</StyledRemovingAttribute>
							</StyledSelectedAttribute>
						);
					})}
				</StyledSelectingBox>
			</StyledSelectingColumn>
			<StyledButton onClick={handleClickApply}>Apply</StyledButton>
		</StyledSelectingFormWrapper>
	);
};
