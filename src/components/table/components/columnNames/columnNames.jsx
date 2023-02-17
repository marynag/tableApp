import { useSelector } from 'react-redux';
import {
	StyledColumnNames,
	StyledSelectedNamesRow,
} from './columnNames.styled';

export const ColumnNames = () => {
	const selectedColunms = useSelector((state) => state);

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
