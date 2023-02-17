import { ColumnNames } from './components/columnNames';
import { Rows } from './components/rows';
import {
	StyledTable,
	StyledTableBody,
	StyledTableWrapper,
} from './table.styled';
import { useSelector } from 'react-redux';
import { getSelectedColumnNames } from '../../store/selectors';
import { ModalWindow } from '../modalWindow';

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
