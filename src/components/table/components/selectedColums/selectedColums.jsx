import { useSelector } from 'react-redux';
import { StyledColumns } from './selectedColums.styled';
import { getSelectedColumnNames } from '../../../../store/selectors';

export const SelectedColums = ({ userInfo }) => {
	const selectedColunms = useSelector(getSelectedColumnNames);
	return (
		<>
			{selectedColunms.map((column) => {
				return (
					<StyledColumns key={userInfo[column]} data-testid='selectedColumn'>
						{userInfo[column]}
					</StyledColumns>
				);
			})}
		</>
	);
};
