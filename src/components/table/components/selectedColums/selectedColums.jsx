export const SelectedColums = ({ userInfo }) => {
	const selectedAttributes = ['name', 'username'];
	return (
		<>
			{selectedAttributes.map((column) => {
				return <td key={userInfo[column]}>{userInfo[column]}</td>;
			})}
		</>
	);
};
