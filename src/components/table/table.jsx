import { Rows } from './components/rows/rows';
import { ColumnNames } from './components/columnNames/columnNames';
import styles from './table.module.scss';
import { ModalWindow } from '../modalWindow/modalWindow';

export const Table = () => {
	return (
		<div className={styles.tableWrapper}>
			<ModalWindow />
			<table>
				<ColumnNames />
				<Rows />
			</table>
		</div>
	);
};
