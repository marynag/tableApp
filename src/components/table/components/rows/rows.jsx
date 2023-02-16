import { tableData } from '../../../../constants/tabledata';
import { SelectedColums } from '../selectedColums/selectedColums';
import styled from 'styled-components';
export const Rows = () => {
	const StyledRows = styled.tr`
		display: flex;
		flex-direction: row;
	`;
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
