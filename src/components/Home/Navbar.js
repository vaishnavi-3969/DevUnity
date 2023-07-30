import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCompass,
  faBell,
  faUser,
  faCamera,
  faHeart,
  faCode,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 text-white shadow-lg fixed bottom-0 left-0 right-0 py-2 px-4 md:py-4 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-blue-500 font-bold text-xl md:text-2xl">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-10 h-10 mr-2" />
            <div>DevUnity</div>
          </div>
        </Link>
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link
            to="/explore"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faCompass} className="mr-2" />
            Explore
          </Link>
          <Link
            to="/notifications"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faBell} className="mr-2" />
            Notifications
          </Link>
          <Link
            to="/profile"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Profile
          </Link>
          <Link
            to="/upload"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faCamera} className="mr-2" />
            Upload
          </Link>
          <Link
            to="/project_showcase"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Spotlight
          </Link>
          <Link
            to="/code"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            Code
          </Link>
          <Link
            to="/learn"
            className="flex items-center text-gray-300 hover:text-white mr-4 md:text-lg md:mr-6 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Learn
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
