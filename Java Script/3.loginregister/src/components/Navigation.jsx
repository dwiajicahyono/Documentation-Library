import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="flex gap-5 justify-center my-5 items-center">
      <img className='rounded-full w-10' src={avatar} alt={id} title={name} />
      <h1 className="mr-2 dotsTitle">{name}</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <button type="button" onClick={signOut} className='text-red-500 hover:text-blue-500'>Sign out</button>
    </div>
  );
}

export default Navigation;
