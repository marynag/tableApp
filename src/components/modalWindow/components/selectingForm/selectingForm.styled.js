import styled from 'styled-components';

export const StyledButton = styled.button`
	margin-top: 20px;
	align-self: flex-end;
	width: 150px;
	padding: 8px;
	border-radius: 8px;
	margin-bottom: 20px;
	color: white;
	background-color: rgb(187, 91, 244);
	border: none;
`;

export const StyledSelectedAttribute = styled.div`
	padding: 0 25px;
	display: flex;
	margin: 15px 25px;
	justify-content: space-between;
	background-color: #1f2127;
	border-radius: 15px;
`;

export const StyledSelectingBox = styled.div`
	background-color: rgb(25, 27, 31);
	width: 45%;
	border-radius: 15px;
	height: 600px;
`;

export const StyledSelectingFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 50px;
`;

export const StyledSelectingColumn = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	color: white;
	text-align: center;
`;

export const StyledInput = styled.input`
	padding: 10px;
	background-color: #000000;
	border: none;
	border-radius: 10px;
	color: #ffffff;
	width: 250px;
`;

export const StyledremovingAttribute = styled.p`
	&:hover {
		color: rgb(187, 91, 244);
		cursor: pointer;
	}
`;
