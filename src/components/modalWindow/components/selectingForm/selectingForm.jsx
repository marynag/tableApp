import { useState } from 'react';

export const SelectingForm = () => {
	const [input, setInput] = useState('');

	const handleChangeInput = (event) => {
		setInput(event.target.value);
	};

	return (
		<>
			<input
				type='text'
				value={input}
				placeholder='Search available columns...'
				onChange={handleChangeInput}
			/>
			<div>
				<div>
					<p>Avaliable columns</p>
				</div>
				<div>
					<p>Selected columns</p>
				</div>
			</div>
		</>
	);
};
