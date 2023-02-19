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
	padding: 5px;
	@media screen and (max-width: 768px) {
		white-space: pre-wrap;
		word-break: break-all;
		font-size: 13px;
	}
`;
