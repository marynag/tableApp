import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const SelectedColums = ({ userInfo }) => {
	const selectedColunms = useSelector((state) => state);

	const StyledColumns = styled.td`
		text-align: center;
		width: 100%;
		border: 1px solid;
		color: white;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

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
		<>
			{selectedColunms.map((column) => {
				return (
					<StyledColumns key={userInfo[column]}>
						{userInfo[column]}
					</StyledColumns>
				);
			})}
		</>
	);
};
