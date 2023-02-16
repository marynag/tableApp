import { tableData } from '../../../../constants/tabledata';
import { SelectedColums } from '../selectedColums/selectedColums';
import { StyledRows } from './rows.styled';

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
