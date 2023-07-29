import React from 'react';
import Sidebar from './Sidebar';

const Profile = () => {
  return (
    <section className="flex">
        <Sidebar/>
        <div>
            <h1 className="color-black px-20 py-10 text-4xl">My Profile</h1>
            
        </div>
    </section>
  )
}

export default Profile