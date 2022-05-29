import React from "react";
import ProfileImg from '../assets/img/post1.jpg'
import Icons from '../assets/icons/sidebar.svg'

const Profile = () => {
    return (
        <div className="todo__sidebar-block">
            <div className="todo__option m-4 ul-header">
                <img className="avatar-img" height="24" src={ProfileImg} alt="avatar" />
                <span>Username</span>
            </div>
            <ul className="todo__list">
                <li className="todo__option">
                    <button className="btn">edit profile</button>
                </li>
                <li className="todo__option">
                    <button className="btn-primary red-bg">logout</button>
                </li>
            </ul>
        </div>
    );
}

export default Profile;