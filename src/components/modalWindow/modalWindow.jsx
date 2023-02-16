import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { SelectingForm } from './components/selectingForm/selectingForm';
import { StyledBox } from './modalWindow.styled';
import { StyledButton } from '../common/common.styled';

export const ModalWindow = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div data-testid='modalWindow'>
			<StyledButton onClick={handleOpen} data-testid='moduleButton'>
				Selected Columns
			</StyledButton>
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
		</div>
	);
};
