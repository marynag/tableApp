import { selectedAttributes } from '../../../../constants/tabledata';

export const SelectedColums = ({ userInfo }) => {
	return (
		<>
			{selectedAttributes.map((column) => {
				return <td key={userInfo[column]}>{userInfo[column]}</td>;
			})}
		</>
	);
};
