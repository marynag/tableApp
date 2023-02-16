import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { SelectingForm } from './components/selectingForm/selectingForm';
import { StyledBox, StyledButton } from './modalWindow.styled';

export const ModalWindow = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<StyledButton onClick={handleOpen}>Selected Columns</StyledButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<StyledBox>
					<SelectingForm setOpen={setOpen} />
				</StyledBox>
			</Modal>
		</>
	);
};
