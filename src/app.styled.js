import styled from 'styled-components';

export const StyledApp = styled.div`
	margin-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		height: inherit;
		margin-top: 20px;
	}
`;
