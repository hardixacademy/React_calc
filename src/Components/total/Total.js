import React from 'react';

const Total = ({ transactions }) => {
	let count = 0;
	let plus = 0;
	let minus = 0;

	transactions.forEach((item) => {
		plus = item.add ? plus + +item.amount : plus;
		minus = !item.add ? minus + +item.amount : minus;
		count = plus - minus;
	});

	return (
		<section className='total'>
			<header className='total__header'>
				<h3>Баланс</h3>
				<p className='total__balance'>{count} ₽</p>
			</header>
			<div className='total__main'>
				<div className='total__main-item total__income'>
					<h4>Доходы</h4>
					<p className='total__money total__money-income'>+{plus} ₽</p>
				</div>
				<div className='total__main-item total__expenses'>
					<h4>Расходы</h4>
					<p className='total__money total__money-expenses'>-{minus} ₽</p>
				</div>
			</div>
		</section>
	);
};

export default Total;
