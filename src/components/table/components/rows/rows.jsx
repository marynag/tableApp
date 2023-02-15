import { tableData } from '../../../../constants/tabledata';

export const Rows = () => {
	return (
		<>
			{tableData.map((item) => {
				return (
					<tr key={item.username}>
						<td>{item.name}</td>
						<td>{item.username}</td>
						<td>{item.email}</td>
						<td>{item.address}</td>
						<td>{item.phone}</td>
						<td>{item.website}</td>
						<td>{item.company}</td>
					</tr>
				);
			})}
		</>
	);
};
