import { tableData } from '../../../../constants/tabledata';
import { SelectedColums } from '../selectedColums/selectedColums';

export const Rows = () => {
	return (
		<>
			{tableData.map((userInfo) => {
				return (
					<tr key={userInfo.username}>
						<SelectedColums userInfo={userInfo} />
					</tr>
				);
			})}
		</>
	);
};
