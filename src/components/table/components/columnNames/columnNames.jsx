import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const ColumnNames = () => {
	const selectedColunms = useSelector((state) => state);

	const StyledSelectedNamesRow = styled.tr`
		display: flex;
	`;
	const StyledColumnNames = styled.th`
		background-color: rgb(45, 47, 54);
		text-align: center;
		width: 100%;
		border: 1px solid;
		color: white;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		border-collapse: collapse;

		@supports (-webkit-line-clamp: 1) {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: initial;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}
	`;
	return (
		<StyledSelectedNamesRow>
			{selectedColunms.map((column) => {
				return (
					<StyledColumnNames key={column}>
						{column.toUpperCase()}
					</StyledColumnNames>
				);
			})}
		</StyledSelectedNamesRow>
	);
};
