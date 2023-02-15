export const ColumnNames = () => {
	const selectedAttributes = ['name', 'username'];
	return (
		<tr>
			{selectedAttributes.map((column) => {
				return <th key={column}>{column}</th>;
			})}
		</tr>
	);
};
