import './App.css';
import React, {useState} from 'react';
import List from './components/List'
import Profile from './components/Profile';
import Subscriptions from './components/Subscribtions';

function App() {
	const [state, setState] = useState(0);
	return (
	<div className="todo">
		<aside className="todo__sidebar">
			<Profile />
			<List
				stat = {state}
				items = {[
					{  
						id: 1,
						color: "#e68080",
						name: "asdsadsa"
					},
					{   
						id: 2,
						color: "#FFBBCC",
						name: "asdsadsa"
					},
					{   
						id: 3,
						color: "#C9D1D3",
						name: "sdafsdafsadfgasdf"
					},
					{   
						id: 4,
						color: "#C9D1D3",
						name: "asdsadsa",
						active: true
					},
					{   
						id: 5,
						color: "#B6E6BD",
						name: "asdsadsa",
						active: true
					},
					{   
						id: 6,
						color: "#64C4ED",
						name: "asdsadsa"
					},
					{   
						id: 7,
						color: "#64C4ED",
						name: "asdsadsa"
					},
					{   
						id: 8,
						color: "#64C4ED",
						name: "asdsadsa"
					},
					{   
						id: 9,
						color: "#64C4ED",
						name: "asdsadsa"
					},
					{   
						id: 10,
						color: "#64C4ED",
						name: "asdsadsa"
					},

				]}
			isRemovable={false}
			/>
		</aside>
		<main className="todo__content">
			
		</main>
	</div>
	);
}

export default App;
