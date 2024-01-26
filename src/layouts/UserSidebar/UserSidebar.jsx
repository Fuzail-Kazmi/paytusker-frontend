/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Turtle, UserCog } from "lucide-react";
import { useEffect, useState } from "react";


export const UserSidebar = () => {
    const sidebarLinks = [
        { "label": "Account Settings", "url": "/profile" },
        { "label": "Address Book", "url": "/profile/address" },
        { "label": "Pending Orders", "url": "/" },
        { "label": "All Orders", "url": "/" },
    ]

    return (
        <div className="user-sidebar">
            <div className="sidebar-heading">
                <h1>User Profile</h1>
            </div>

            <nav className="sidebar-nav">
                <div className="sidebar-nav-elements">
                    {sidebarLinks.map((val, id) => (
                        <SidebarNavElement key={id} url={val.url} label={val.label} />
                    ))}
                </div>
            </nav>

        </div >
    )
}

export default UserSidebar

const SidebarNavElement = ({ url, label }) => {
    return (
        <div className={window.location.pathname === url ? "sidebar-nav-el__wrapper active" : "sidebar-nav-el__wrapper"}  >
            <Link to={url} className="sidebar-nav-el">
                <div className="sidebar-nav-icon">
                    <UserCog />
                </div>
                <div className="sidebar-nav-label">
                    {label}
                </div>
            </Link>
        </div>
    )
}