import styled from 'styled-components';

export const StyledBox = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 700px;
	background-color: rgb(31, 33, 39);
	border-radius: 15px;
	padding: 25px;
	@media screen and (max-width: 768px) {
		width: 250px;
		padding: 7px;
	}
`;
