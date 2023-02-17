import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
	width: 85%;
	background-color: rgb(25, 27, 31);
	padding: 20px;
	border-radius: 10px;
`;
export const StyledTable = styled.table`
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
		overscroll: scroll;
	}
`;

export const StyledTableBody = styled.tbody`
	width: 100%;
	display: table;
`;
