import styled from 'styled-components';

export const StyledSelectedAttribute = styled.div`
	padding: 0 25px;
	display: flex;
	margin: 5px 10px;
	justify-content: space-between;
	background-color: #1f2127;
	border-radius: 15px;
	@media screen and (max-width: 768px) {
		font-size: 13px;
		margin: 7px 4px;
		padding: 0 5px;
	}
	@media screen and (min-width: 1600px) and (max-width: 1950px) {
		font-size: 13px;
	}
`;

export const StyledSelectingBox = styled.div`
	display: grid;
	grid-template-rows: repeat(9, 1fr);
	background-color: rgb(25, 27, 31);
	width: 45%;
	border-radius: 15px;
	@media screen and (min-width: 1600px) and (max-width: 1950px) {
		font-size: 13px;
	}
`;

export const StyledSelectingFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 50px;
	font-size: 13px;
	@media screen and (max-width: 768px) {
		padding: 10px;
	}
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
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const StyledRemovingAttribute = styled.p`
	&:hover {
		color: rgb(187, 91, 244);
		cursor: pointer;
	}
`;
