import { Rows } from './components/rows/rows';
import { ColumnNames } from './components/columnNames/columnNames';
import { ModalWindow } from '../modalWindow/modalWindow';
import { StyledTable, StyledTableWrapper } from './table.styled';
import { useSelector } from 'react-redux';

export const Table = () => {
	const selectedColunms = useSelector((state) => state);
	return (
		<StyledTableWrapper data-testid='tableWrapper'>
			<ModalWindow />
			{!!selectedColunms.length && (
				<StyledTable>
					<ColumnNames />
					<Rows />
				</StyledTable>
			)}
		</StyledTableWrapper>
	);
};
