import React from 'react';
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
        </div>


        <div class="listing-container">
          <form class="inputs-container">
            
            <input type="text" name="cpt-title" class="simple-input" placeholder="Nom de la sauce" autocomplete="none" />
            
            
            <span data-label="Qu'avez-vous mélangé comme sauce ?">
              <input type="text" placeholder="Ajouter une sauce" class="js-sauce-name" />
            </span>

            <span class="js-add-sauce">
              <a href="#addSauce"><i class="icon icon-add"></i></a>
            </span>
          </form>
        </div>
      </section>
    )  
  );
};

export default Profile