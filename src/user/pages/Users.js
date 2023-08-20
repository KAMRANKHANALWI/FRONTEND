import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Shawn Mendes',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F05%2Fsm-press-photo-brianziff-2017-2000.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
