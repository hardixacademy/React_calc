import React from 'react';

const HistoryItem = ({ transaction, delite }) => {
	return (
		<li className={`history__item ${transaction.add ? 'history__item-plus' : 'history__item-minus'}`}>
			{transaction.description}
			<span className='history__money'>
				{transaction.add ? '+' : '-'}
				{transaction.amount} ₽
			</span>
			<button
				onClick={() => {
					delite(transaction.id);
					console.log(transaction.id);
				}}
				className='history__delete'>
				x
			</button>
		</li>
	);
};

export default HistoryItem;
