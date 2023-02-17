import { SelectedColums } from '../selectedColums/selectedColums';
import { StyledRows } from './rows.styled';
import { useSelector } from 'react-redux';
import { getTableData } from '../../../../store/selectors';

export const Rows = () => {
	const tableData = useSelector(getTableData);
	return (
		<>
			{tableData.map((userInfo) => {
				return (
					<StyledRows key={userInfo.id}>
						<SelectedColums userInfo={userInfo} />
					</StyledRows>
				);
			})}
		</>
	);
};
