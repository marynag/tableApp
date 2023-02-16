import { Rows } from './components/rows/rows';
import { ColumnNames } from './components/columnNames/columnNames';
import { ModalWindow } from '../modalWindow/modalWindow';
import { StyledTable, StyledTableWrapper } from './table.styled';

export const Table = () => {
	return (
		<StyledTableWrapper>
			<ModalWindow />
			<StyledTable>
				<ColumnNames />
				<Rows />
			</StyledTable>
		</StyledTableWrapper>
	);
};
