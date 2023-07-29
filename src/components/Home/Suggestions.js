import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import UserProfile from './UserProfile';

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [showConnectDialog, setShowConnectDialog] = useState({});
    const [showFollowConfetti, setShowFollowConfetti] = useState({});
    const [profileLink, setProfileLink] = useState('');
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=10');
                const data = response.data.results;
                const initialShowConnectDialog = {};
                const initialShowFollowConfetti = {};
                data.forEach((user) => {
                    initialShowConnectDialog[user.login.uuid] = false;
                    initialShowFollowConfetti[user.login.uuid] = false;
                });
                setShowConnectDialog(initialShowConnectDialog);
                setShowFollowConfetti(initialShowFollowConfetti);
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching random user data:', error);
            }
        };
        fetchRandomUsers();
    }, []);

    const handleConnectRequest = (userId) => {
        console.log('Sending connection request to user with ID:', userId);
        setShowConnectDialog((prevState) => ({ ...prevState, [userId]: true }));
    };

    const handleFollowUser = (userId) => {
        console.log('Following user with ID:', userId);
        setShowFollowConfetti((prevState) => ({ ...prevState, [userId]: true }));
    };

    const handleViewProfile = (userId) => {
        console.log('Viewing profile of user with ID:', userId);
        const uniqueProfileLink = `https://example.com/profile/${userId}`;
        setProfileLink(uniqueProfileLink);
        setSelectedUserId(userId);
    };

    return (
        <div className="suggestions-section bg-white py-4 px-6">
            <h2 className="text-lg font-bold mb-4">Suggestions for You</h2>
            <div className="grid grid-cols-3 gap-4">
                {suggestions.map((user) => (
                    <motion.div
                        key={user.login.uuid}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="suggestion flex flex-col p-2 rounded-md shadow-md transition-transform"
                    >
                        <div className="flex items-center mb-2">
                            <img src={user.picture.large} alt="User Avatar" className="w-16 h-16 rounded-full mr-2" />
                            <div>
                                <p className="text-sm text-gray-800">{`${user.name.first} ${user.name.last}`}</p>
                                <p className="text-xs text-gray-500">{user.location.city}, {user.location.country}</p>
                            </div>
                        </div>
                        <div className="ml-auto mt-auto">
                            <motion.button
                                className={`text-sm font-semibold mr-2 ${showFollowConfetti[user.login.uuid] ? 'text-red-500' : 'text-blue-500'
                                    }`}
                                onClick={() => handleFollowUser(user.login.uuid)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {showFollowConfetti[user.login.uuid] ? 'Unfollow' : 'Follow'}
                            </motion.button>
                            <Link to={`/userprofile/${user.login.uuid}`}>
                                <motion.button
                                    className="text-blue-500 text-sm font-semibold"
                                    onClick={() => handleViewProfile(user.login.uuid)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    View Profile
                                </motion.button>
                            </Link>

                            <motion.button
                                className="text-blue-500 text-sm font-semibold p-1"
                                onClick={() => handleConnectRequest(user.login.uuid)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Connect
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Connect Dialog Box */}
            {Object.entries(showConnectDialog).map(([userId, showDialog]) => (
                showDialog && (
                    <div className="popup" key={userId}>
                        <p>Connect request sent to user with ID: {userId}</p>
                        <button className="text-blue-500 text-sm font-semibold" onClick={() => setShowConnectDialog((prevState) => ({ ...prevState, [userId]: false }))}>
                            Close
                        </button>
                    </div>
                )
            ))}

            {/* Follow Confetti */}
            {Object.entries(showFollowConfetti).map(([userId, showConfetti]) => (
                showConfetti && (
                    <Confetti key={userId} width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={100} />
                )
            ))}

            {/* Profile Link - Redirect */}
            {profileLink && (
                <div className="popup">
                    <p>Redirecting to Profile Page...</p>
                    <button className="text-blue-500 text-sm font-semibold" onClick={() => setProfileLink('')}>
                        Close
                    </button>
                </div>
            )}

            {/* Show User Profile */}
            {selectedUserId && <UserProfile userId={selectedUserId} />}

        </div>
    );
};

export default Suggestions;
