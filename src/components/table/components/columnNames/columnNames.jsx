import { selectedAttributes } from '../../../../constants/tabledata';

export const ColumnNames = () => {
	return (
		<tr>
			{selectedAttributes.map((column) => {
				return <th key={column}>{column.toUpperCase()}</th>;
			})}
		</tr>
	);
};
