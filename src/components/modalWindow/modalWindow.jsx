import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SelectingForm } from './components/selectingForm/selectingForm';
import styles from './modalWindow.module.scss';

export const ModalWindow = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<button onClick={handleOpen}>Selected Columns</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box className={styles.box}>
					<SelectingForm setOpen={setOpen} />
				</Box>
			</Modal>
		</>
	);
};
