import styled from 'styled-components';

export const StyledApp = styled.div`
	height: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		height: inherit;
		margin-top: 20px;
	}
`;
