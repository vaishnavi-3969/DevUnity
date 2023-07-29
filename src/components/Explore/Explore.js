import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import { BsHeart, BsChat } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Threads from '../../assets/threads.png';

const Explore = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [explorePosts, setExplorePosts] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [postComments, setPostComments] = useState({});
  const [commentTexts, setCommentTexts] = useState({});

  const sampleExplorePosts = [
    {
      id: 1,
      user: 'JohnDoe',
      content: 'Having a great time exploring the world of React!',
      likes: 20,
      comments: [
        { id: 1, user: 'Alice', text: 'Amazing post!' },
        { id: 2, user: 'Bob', text: 'Keep it up!' },
      ],
    },
    {
      id: 2,
      user: 'JaneSmith',
      content: 'Just built my first full-stack app with MERN stack! 🚀',
      likes: 34,
      comments: [{ id: 3, user: 'Charlie', text: 'Congratulations!' }],
    },
    {
      id: 3,
      user: 'Eva123',
      content: 'Learning new things every day!',
      likes: 15,
      comments: [
        { id: 4, user: 'David', text: 'Great progress!' },
        { id: 5, user: 'Alice', text: 'Keep it up!' },
      ],
    },
    {
      id: 4,
      user: 'MarkJ',
      content: 'Excited to start my coding journey!',
      likes: 42,
      comments: [{ id: 6, user: 'Emma', text: 'Good luck!' }],
    },
    {
      id: 5,
      user: 'TechGuru',
      content: 'Sharing my latest tech discoveries!',
      likes: 12,
      comments: [{ id: 7, user: 'JohnDoe', text: 'Awesome!' }],
    },
    {
      id: 6,
      user: 'CodeMaster',
      content: 'Solving coding challenges like a pro!',
      likes: 28,
      comments: [
        { id: 8, user: 'JaneSmith', text: 'Impressive!' },
        { id: 9, user: 'Bob', text: 'Teach me your ways!' },
      ],
    },
    {
      id: 7,
      user: 'WebDev101',
      content: 'Building my first website from scratch!',
      likes: 18,
      comments: [
        { id: 10, user: 'Alice', text: 'Looks great!' },
        { id: 11, user: 'JohnDoe', text: 'Awesome work!' },
      ],
    },
    {
      id: 8,
      user: 'FrontendWizard',
      content: 'Exploring the latest frontend frameworks!',
      likes: 37,
      comments: [{ id: 12, user: 'Emma', text: 'Keep exploring!' }],
    },
    {
      id: 9,
      user: 'BackendNinja',
      content: 'Mastering backend development techniques!',
      likes: 23,
      comments: [{ id: 13, user: 'David', text: 'You got this!' }],
    },
    {
      id: 10,
      user: 'DataGeek',
      content: 'Diving deep into data analysis!',
      likes: 31,
      comments: [
        { id: 14, user: 'MarkJ', text: 'Fascinating insights!' },
        { id: 15, user: 'JaneSmith', text: 'Keep analyzing!' },
      ],
    },
  ];
  

  useEffect(() => {
    setExplorePosts(sampleExplorePosts);
  }, []);

  useEffect(() => {
    const commentsObj = explorePosts.reduce((acc, post) => {
      acc[post.id] = post.comments;
      return acc;
    }, {});
    setPostComments(commentsObj);
  }, [explorePosts]);

  const handleLikeClick = (postId) => {
    setExplorePosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleUnlikeClick = (postId) => {
    setExplorePosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes - 1 } : post
      )
    );
  };

    const handleComment = (postId, commentText) => {
    if (!commentText.trim()) return;

    setPostComments((prevComments) => ({
      ...prevComments,
      [postId]: [
        ...prevComments[postId],
        { id: Date.now(), user: user.name, text: commentText },
      ],
    }));

    setCommentTexts((prevTexts) => ({
      ...prevTexts,
      [postId]: '',
    }));
  };

  return (
    <div>
      {/* Header */}
      <div className="header-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-10 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={Threads} alt="Logo" className="w-40 md:w-60 h-auto" />
              <h1 className="text-3xl text-lg font-semibold ml-4">Developers Threads</h1>
            </div>
            {isAuthenticated && (
              <div className="user-info">
                <img
                  src={user.picture}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-lg font-bold ml-2">{user.name}</span>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="text-sm font-semibold text-gray-500 hover:text-gray-800 ml-4"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Explore Posts */}
      <div className="explore-section bg-white py-10 px-10">
        <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {explorePosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
              className="post bg-gray-100 p-6 rounded-md"
            >
              <div className="post-header flex items-center mb-4">
                <img
                  src={`https://avatars.dicebear.com/api/bottts/${post.user}.svg`}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-semibold ml-2">{post.user}</span>
              </div>
              <p className="post-content text-gray-800">{post.content}</p>
              <div className="post-actions mt-4 flex items-center">
                <button
                  onClick={() => handleLikeClick(post.id)}
                  className="flex items-center text-blue-500 font-bold mr-4"
                >
                  <BsHeart className="mr-1" />
                  Like ({post.likes})
                </button>
                <button
                  onClick={() => handleUnlikeClick(post.id)}
                  className="flex items-center text-blue-500 font-bold mr-4"
                >
                  <BsHeart className="mr-1" />
                  Unlike
                </button>
                <button className="flex items-center text-blue-500 font-bold">
                  <BsChat className="mr-1" />
                  Comment ({postComments[post.id]?.length || 0})
                </button>
              </div>
              <div className="comments mt-4">
                {postComments[post.id]?.map((comment) => (
                  <div key={comment.id} className="comment-item mb-2">
                    <span className="font-semibold">{comment.user}: </span>
                    <span>{comment.text}</span>
                  </div>
                ))}
              </div>

              {isAuthenticated && (
        <div className="add-comment mt-4">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentTexts[post.id] || ''}
            onChange={(e) =>
              setCommentTexts((prevTexts) => ({
                ...prevTexts,
                [post.id]: e.target.value,
              }))
            }
          />
          <button
            onClick={() => handleComment(post.id, commentTexts[post.id])}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full ml-2"
          >
            Add
          </button>
        </div>
      )}
    </motion.div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Explore;
