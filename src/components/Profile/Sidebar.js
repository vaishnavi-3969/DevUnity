import React from "react";
import { FaUserCircle, FaHome, FaIgloo, FaRocketchat } from "react-icons/fa";
import ProfileCard from "./ProfileCard";

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center py-5 px-2">
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                                >
                                    <FaHome size={20}/>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                                >
                                
                                    <FaUserCircle size={20}/>
                                        
                                    <span>Edit Profile</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                                >
                                    <FaIgloo size={20} />
                                    <span>Events and Hackathons</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                                >
                                    <FaRocketchat size={20} />
                                    <span>Chats</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span>Sign out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}