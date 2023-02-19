import styled from 'styled-components';

export const StyledColumns = styled.td`
	text-align: center;
	width: 100%;
	border: 1px solid;
	color: white;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
    padding: 7px 0;
    font-size: 16px;
  
  @media screen and (max-width: 768px) {
    white-space: pre-wrap;
    word-break: break-all;
    font-size: 13px;
`;
