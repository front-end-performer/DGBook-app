import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className='row mb-5'>
      <div className='jumbotron'>
        <h1 className='display-4'>We can't find what you're looking for</h1>
        <p className='lead'>This is a simple not found page.</p>
        <hr className='my-4' />
        <p>There really is nothing here. Let's go back to home</p>
        <p className='lead'>
          <Link to='/'>Bact to home</Link>
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
