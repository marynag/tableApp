import { useSelector } from 'react-redux';
import {
	StyledColumnNames,
	StyledSelectedNamesRow,
} from './columnNames.styled';
import { getSelectedColumnNames } from '../../../../store/selectors';

export const ColumnNames = () => {
	const selectedColunms = useSelector(getSelectedColumnNames);

	return (
		<StyledSelectedNamesRow>
			{selectedColunms.map((column) => {
				return (
					<StyledColumnNames key={column} data-testid='columnName'>
						{column.toUpperCase()}
					</StyledColumnNames>
				);
			})}
		</StyledSelectedNamesRow>
	);
};
