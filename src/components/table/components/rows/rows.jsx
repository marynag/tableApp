import { StyledRows } from './rows.styled';
import { SelectedColums } from '../selectedColums';
import { tableData } from '../../../../constants/tabledata';

export const Rows = () => {
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
