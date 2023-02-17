import { StyledRows } from './rows.styled';
import { useSelector } from 'react-redux';
import { getTableData } from '../../../../store/selectors';
import { SelectedColums } from '../selectedColums';

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
