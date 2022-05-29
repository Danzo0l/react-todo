import React from "react";
import Icons from '../assets/icons/sidebar.svg'

const List = ({items}) => {
    return (
        <div className="todo__sidebar-block">
            <div className="todo__option m-4 ul-header">
                <img className="todo__list-icon" src={Icons} alt="List icon"/>
                <span>All tasks</span>
            </div>
            <ul className="todo__list lists">
                {
                    items.map(item => 
                        <li key={item.id} className={item.active ? 'todo__option active': 'todo__option'}> 
                            <div className="category" style={{backgroundColor: (item.color ? item.color : "#C9D1D3")}}></div> 
                            <span>{item.name}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default List;