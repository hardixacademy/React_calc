import React, { useRef } from 'react';

const Operation = ({ addTransaction }) => {
	const inputElDesc = useRef(null);
	const inputElAm = useRef(null);

	return (
		<section className='operation'>
			<h3>Новая операция</h3>
			<form id='form'>
				<label>
					<input type='text' className='operation__fields operation__name' placeholder='Наименование операции' ref={inputElDesc} />
				</label>
				<label>
					<input type='number' className='operation__fields operation__amount' placeholder='Введите сумму' ref={inputElAm} />
				</label>
				<div className='operation__btns'>
					<button
						type='button'
						className='operation__btn operation__btn-subtract'
						onClick={() => {
							addTransaction(false, inputElDesc.current.value, inputElAm.current.value);
							inputElDesc.current.value = '';
							inputElAm.current.value = '';
						}}>
						РАСХОД
					</button>
					<button
						type='button'
						className='operation__btn operation__btn-add'
						onClick={() => {
							addTransaction(true, inputElDesc.current.value, inputElAm.current.value);
							inputElDesc.current.value = '';
							inputElAm.current.value = '';
						}}>
						ДОХОД
					</button>
				</div>
			</form>
		</section>
	);
};

export default Operation;
