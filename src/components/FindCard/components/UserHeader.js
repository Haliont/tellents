import React from 'react';
import Title from './Title';
import Username from './Username';

function UserTitle({ username, userProfession }) {
  return (
    <Title>
      <Username {...{ username }} />
      <div className="job-box-prof">
        {userProfession}
      </div>
    </Title>
  );
}

export default UserTitle;
