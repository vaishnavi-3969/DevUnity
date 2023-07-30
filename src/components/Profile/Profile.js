import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <section className="flex">
        <Sidebar/>
        <div className='ml-10 mt-10'>
            <img src={user.picture} alt={user.name} className='rounded-full'/>
            <h2 className='font-bold'>{user.name}</h2>
            <p className='font-sans'>Email: {user.email}</p>
            <br />
            <p>Web Developer</p>
        </div>
      </section>
    )  
  );
};

export default Profile