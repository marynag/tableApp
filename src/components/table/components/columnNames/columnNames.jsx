import { useSelector } from 'react-redux';

export const ColumnNames = () => {
	const selectedColunms = useSelector((state) => state);
	return (
		<tr>
			{selectedColunms.map((column) => {
				return <th key={column}>{column.toUpperCase()}</th>;
			})}
		</tr>
	);
};
