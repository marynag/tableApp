import styled from 'styled-components';

export const StyledButton = styled.button`
	padding: 8px;
	border-radius: 8px;
	margin: 20px 0;
	color: white;
	background-color: rgb(187, 91, 244);
	border: none;
	width: 150px;
	align-self: flex-end;
	@media screen and (max-width: 768px) {
		width: 100px;
	}
	&:hover {
		background-color: rgb(143, 59, 190);
		cursor: pointer;
	}
`;
