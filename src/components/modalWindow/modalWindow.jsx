import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SelectingForm } from './components/selectingForm/selectingForm';
import styles from './modalWindow.module.scss';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	bgcolor: 'rgb(31,33,39)',
	borderRadius: '15px',
	boxShadow: 24,
	p: 4,
};

export const ModalWindow = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<button onClick={handleOpen} className={styles.modalButton}>
				Selected Columns
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<SelectingForm setOpen={setOpen} />
				</Box>
			</Modal>
		</>
	);
};
