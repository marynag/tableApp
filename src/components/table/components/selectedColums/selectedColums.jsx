import { useSelector } from 'react-redux';

export const SelectedColums = ({ userInfo }) => {
	const selectedColunms = useSelector((state) => state);
	return (
		<>
			{selectedColunms.map((column) => {
				return <td key={userInfo[column]}>{userInfo[column]}</td>;
			})}
		</>
	);
};
