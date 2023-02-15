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

	const handleChangeInput = (event) => {
		setInput(event.target.value);
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
					{avaliableColumns.map((item) => {
						return (
							<div className={styles.selectedAttribute}>
								<p>{item.toUpperCase()}</p>
							</div>
						);
					})}
				</div>
				<div className={styles.selectingBox}>
					<p>Selected columns</p>
					{selectedColumns.map((item) => {
						return (
							<div className={styles.selectedAttribute}>
								<p>{item.toUpperCase()}</p>
								<p onClick={() => handleSelectColumn(item)}>x</p>
							</div>
						);
					})}
				</div>
			</div>
			<button className={styles.modalButton}>Apply</button>
		</div>
	);
};
