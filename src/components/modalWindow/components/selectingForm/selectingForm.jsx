import { useEffect, useState } from 'react';
import { tableData } from '../../../../constants/tabledata';
import { useDispatch, useSelector } from 'react-redux';
import {
	StyledInput,
	StyledremovingAttribute,
	StyledSelectedAttribute,
	StyledSelectingBox,
	StyledSelectingColumn,
	StyledSelectingFormWrapper,
} from './selectingForm.styled';
import { StyledButton } from '../../../common/common.styled';

export const SelectingForm = (props) => {
	const [input, setInput] = useState('');
	const selectedAttributes = useSelector((state) => state);
	const [selectedColumns, setSelectedColumns] = useState([]);
	const [avaliableColumns, setAvaliableColumns] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const attributes = Object.keys(tableData[0]);
		const avaliableAttributes = attributes
			.filter((x) => !selectedAttributes.includes(x))
			.concat(selectedAttributes.filter((x) => !attributes.includes(x)));

		setSelectedColumns(selectedAttributes);
		setAvaliableColumns(avaliableAttributes);
	}, []);

	const filteredAvaliableColumns = avaliableColumns.filter((item) =>
		item.toLowerCase().includes(input.toLowerCase())
	);

	const handleChangeInput = (event) => {
		setInput(event.target.value);
	};

	const dragEndHandler = (e, column) => {
		const temp = [...selectedColumns];
		temp.push(column);
		const newAvaliableColumns = avaliableColumns.filter(function (item) {
			return item !== column;
		});
		setAvaliableColumns(newAvaliableColumns);
		setSelectedColumns(temp);
	};

	const handleClickApply = () => {
		dispatch({ type: 'UPDATE_COLUMNS', payload: selectedColumns });
		props.setOpen(false);
	};

	const handleSelectColumn = (selectedColumn) => {
		const temp = [...avaliableColumns];
		temp.push(selectedColumn);
		setAvaliableColumns(temp);

		const newSelectedColumns = selectedColumns.filter(function (item) {
			return item !== selectedColumn;
		});
		setSelectedColumns(newSelectedColumns);
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
								<StyledremovingAttribute
									onClick={() => handleSelectColumn(item)}
								>
									x
								</StyledremovingAttribute>
							</StyledSelectedAttribute>
						);
					})}
				</StyledSelectingBox>
			</StyledSelectingColumn>
			<StyledButton onClick={handleClickApply}>Apply</StyledButton>
		</StyledSelectingFormWrapper>
	);
};
