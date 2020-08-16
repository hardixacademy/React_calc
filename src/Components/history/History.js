import React from 'react';

import HistoryItem from './HistoryItem';

const History = ({ transactions, delite }) => {
	return (
		<section className='history'>
			<h3>История</h3>
			<ul className='history__list'>
				{transactions.map((item) => (
					<HistoryItem key={item.id} transaction={item} delite={delite} />
				))}
			</ul>
		</section>
	);
};

export default History;
