import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/style/sideNavBar.css'
import { useSignOut } from 'react-auth-kit'

const PageHomeSideNav = () => {
    const signOut = useSignOut()
    return (
                <nav id="sidebarMenu" className="collapse d-lg-block">
                    <div className="position-sticky">
                        <div className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                            <ul>
                                <li className="list-group-item">News Feed</li>
                                <li className="list-group-item">Albums</li>
                                <li className="list-group-item">Videos</li>
                                <li className="list-group-item">Popular Post</li>
                                <li className="list-group-item">Blog</li>
                                <li className="list-group-item" onClick={() => signOut()}>Logout</li>
                            </ul>
                        </div>
                    </div>
                </nav>
    )
}

export default PageHomeSideNav;