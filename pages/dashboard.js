import React from 'react';
import useAuth from 'src/hooks/useAuth';

const dashboard = () => {
  const { user } = useAuth();
  return <div>dash: {user && user.displayName}</div>;
};

export default dashboard;
