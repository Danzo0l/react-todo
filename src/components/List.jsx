import React from "react";
import Icons from '../assets/icons/sidebar.svg'

const List = ({items, isRemovable, stat}) => {
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
							<button className="btn btn-delete" id="delete-list-btn">
								<svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="black" fill-opacity="0.32"/>
								</svg>
							</button>
						</li>
					)
				}
			</ul>
			<button className="btn btn-add" id="new-list-btn" onClick={() => {
				setState("1231");
			}}>
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5 0C5.55228 0 6 0.447715 6 1V4H9C9.55229 4 10 4.44772 10 5C10 5.55228 9.55229 6 9 6H6V9C6 9.55229 5.55228 10 5 10C4.44772 10 4 9.55229 4 9V6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H4V1C4 0.447715 4.44772 0 5 0Z" fill="black"/>
				</svg>
				<span>New Group</span>	
			</button>
		</div>

	);
}

export default List;