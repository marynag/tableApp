import styled from 'styled-components';

export const StyledSelectedNamesRow = styled.tr`
	display: flex;
`;
export const StyledColumnNames = styled.th`
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
