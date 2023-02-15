import { useState } from 'react';
import styles from './selectingForm.module.scss';
import { selectedAttributes, tableData } from '../../../../constants/tabledata';

export const SelectingForm = () => {
	const [input, setInput] = useState('');
	const [selectedColumns, setSelectedColumns] = useState(selectedAttributes);

	const attributes = Object.keys(tableData[0]);
	const avaliableAttributes = attributes
		.filter((x) => !selectedColumns.includes(x))
		.concat(selectedColumns.filter((x) => !attributes.includes(x)));

	const [avaliableColumns, setAvaliableColumns] = useState(avaliableAttributes);

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
		<div>
			<input
				type='text'
				value={input}
				placeholder='Search available columns...'
				onChange={handleChangeInput}
			/>
			<div className={styles.selectingColumn}>
				<div className={styles.selectingBox}>
					<p>Avaliable columns</p>
					{filteredAvaliableColumns.map((item) => {
						return (
							<div
								key={item}
								className={styles.selectedAttribute}
								onDragEnd={(e) => dragEndHandler(e, item)}
								draggable={true}
							>
								<p>{item.toUpperCase()}</p>
							</div>
						);
					})}
				</div>
				<div className={styles.selectingBox}>
					<p>Selected columns</p>
					{selectedColumns.map((item) => {
						return (
							<div
								key={item}
								className={styles.selectedAttribute}
								onDragEnd={(e) => dragEndHandler(e)}
							>
								<p>{item.toUpperCase()}</p>
								<p
									onClick={() => handleSelectColumn(item)}
									className={styles.removingAttribute}
								>
									x
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<button className={styles.modalButton}>Apply</button>
		</div>
	);
};
