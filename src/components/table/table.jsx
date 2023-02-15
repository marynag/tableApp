import { Rows } from './components/rows/rows';
import { ColumnNames } from './components/columnNames/columnNames';

export const Table = () => {
	return (
		<>
			<table>
				<ColumnNames />
				<Rows />
			</table>
		</>
	);
};
