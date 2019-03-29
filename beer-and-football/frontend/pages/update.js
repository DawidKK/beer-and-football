import React from 'react';
import UpdateGame from '../components/UpdateGame';
const Update = ({ query }) => {
  return <UpdateGame id={query.id} />;
};

export default Update;
