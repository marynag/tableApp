import { Rows } from './components/rows/rows';
import { ColumnNames } from './components/columnNames/columnNames';
import { ModalWindow } from '../modalWindow/modalWindow';
import {
	StyledTable,
	StyledTableBody,
	StyledTableWrapper,
} from './table.styled';
import { useSelector } from 'react-redux';
import { getSelectedColumnNames } from '../../store/selectors';

export const Table = () => {
	const selectedColunms = useSelector(getSelectedColumnNames);

	return (
		<StyledTableWrapper data-testid='tableWrapper'>
			<ModalWindow />
			{!!selectedColunms.length && (
				<StyledTable>
					<StyledTableBody>
						<ColumnNames />
						<Rows />
					</StyledTableBody>
				</StyledTable>
			)}
		</StyledTableWrapper>
	);
};
