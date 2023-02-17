import { useSelector } from 'react-redux';
import { StyledColumns } from './selectedColums.styled';

export const SelectedColums = ({ userInfo }) => {
	const selectedColunms = useSelector((state) => state);

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
