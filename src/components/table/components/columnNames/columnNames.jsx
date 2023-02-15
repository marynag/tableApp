import { tableData } from '../../../../constants/tabledata';

export const ColumnNames = () => {
	const columnNames = Object.keys(tableData[0]);
	return (
		<>
			{columnNames.map((item) => (
				<th>{item}</th>
			))}
		</>
	);
};
