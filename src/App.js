import './App.css';
import List from './components/List'
import Profile from './components/Profile';
import Subscriptions from './components/Subscribtions';

function App() {
	return (
    <div className="todo">
        <aside className="todo__sidebar">
            <Profile />
            <List items = {[
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
                    name: "asdsadsa"
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
                    name: "asdsadsa"
                },
                {   
                    id: 6,
                    color: "#64C4ED",
                    name: "asdsadsa"
                },
                
            ]}/>
            
        </aside>
        <main className="todo__content">
            
        </main>
    </div>
    );
}

export default App;
