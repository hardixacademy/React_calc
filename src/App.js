import React, { useState } from 'react';
import './css/normalize.css';
import './css/style.css';

import Total from './Components/total/Total';
import History from './Components/history/History';
import Operation from './Components/operation/Operation';

const App = () => {
	const [transactions, setTransaction] = useState([]);

	const addTransaction = (add, description, amount) => {
		setTransaction(
			transactions.concat({
				id: `cmr${(+new Date()).toString(16)}`,
				description,
				amount,
				add,
			}),
		);
	};

	const delite = (id) => {
		setTransaction(transactions.filter((item) => item.id !== id));
	};

	return (
		// <> = <React.Fragment>
		<>
			<header>
				<h1>Кошелек</h1>
				<h2>Калькулятор расходов</h2>
			</header>

			<main>
				<div className='container'>
					<Total transactions={transactions} />

					<History transactions={transactions} delite={delite} />

					<Operation addTransaction={addTransaction} />
				</div>
			</main>
		</>
	);
};

export default App;
