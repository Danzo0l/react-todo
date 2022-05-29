import React from "react";
import Icons from '../assets/icons/sidebar.svg'

const Subscriptions = () => {
    return (
        <div className="todo__sidebar-block">
            <div className="todo__option m-4 ul-header">
                <img className="todo__list-icon" src={Icons} alt="List icon"/>
                <span>Subscriptions</span>
            </div>
            <ul className="todo__list subs">
                <li className="todo__option active"> <div className="category__red"></div> <span>Category</span></li>
                <li className="todo__option"> <div className="category__blue"></div> <span>Category</span></li>
                <li className="todo__option"> <div className="category__yellow"></div> <span>Category</span></li>
                <li className="todo__option"> <div className="category__blue"></div> <span>Category</span></li>
                <li className="todo__option"> <div className="category__red"></div> <span>Category</span></li>
                <li className="todo__option"> <div className="category__blue"></div> <span>Category</span></li>
            </ul>
        </div>
    );
}

export default Subscriptions